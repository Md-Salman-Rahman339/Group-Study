const express = require('express');
  const cors = require('cors');
  const app = express();
  require('dotenv').config()
  
  const port = process.env.PORT || 5000;
  const { MongoClient, ServerApiVersion } = require('mongodb');
  
  app.use(cors());
  app.use(express.json());
 
 
 
 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ieavp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
 
 const client = new MongoClient(uri, {
     serverApi: {
       version: ServerApiVersion.v1,
       strict: true,
       deprecationErrors: true,
     }
   });
   
   async function run() {
     try {
       // Connect the client to the server	(optional starting in v4.7)
       await client.connect();
       // Send a ping to confirm a successful connection
       await client.db("admin").command({ ping: 1 });
       console.log("Pinged your deployment. You successfully connected to MongoDB!");


       const groupAssignmentCollection=client.db('GroupStudy').collection('Assignments')

       app.post('/assignment', async (req, res) => {
        const application = req.body;
        const result = await groupAssignmentCollection.insertOne(application);
        res.send(result);
    })

   
   
   
   
     } finally {
       // Ensures that the client will close when you finish/error
       // await client.close();
     }
   }
   run().catch(console.dir);
   
   
   app.get('/', (req, res) => {
       res.send('Where is your group assignment??')
   })
   
   app.listen(port, () => {
       console.log(`Group Study running: ${port}`)
   })