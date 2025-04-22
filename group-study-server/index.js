const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ieavp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const groupAssignmentCollection = client.db('GroupStudy').collection('Assignments');

        app.post('/assignment', async (req, res) => {
            const application = req.body;
            const result = await groupAssignmentCollection.insertOne(application);
            res.send(result);
        });

        app.get('/assignment', async (req, res) => {
            const result = await groupAssignmentCollection.find().toArray();
            res.send(result);
        });

       
        // app.delete('/assignment/:id', async (req, res) => {
        //     console.log('going to delete', req.params.id);
        //     const id = req.params.id;
        //     const query = { _id: new ObjectId(id) }
        //     const result = await groupAssignmentCollection.deleteOne(query);
        //     res.send(result);
        // })

        app.delete('/assignment/:id', async (req, res) => {
            const id = req.params.id;
            const email = req.query.email;
        
            try {
                const assignment = await groupAssignmentCollection.findOne({ _id: new ObjectId(id) });
        
                if (!assignment) {
                    return res.status(404).send({ error: 'Assignment not found' });
                }
        
              
                if (email !== assignment.applicant_email) {
                    return res.status(403).send({ error: 'Unauthorized: You can only delete your own assignments' });
                }
        
                const result = await groupAssignmentCollection.deleteOne({ _id: new ObjectId(id) });
        
                if (result.deletedCount === 0) {
                    return res.status(500).send({ error: 'Failed to delete the assignment' });
                }
        
                res.send({ message: 'Assignment deleted successfully' });
        
            } catch (error) {
                console.error('Delete error:', error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        });
        
      

    } finally {
        // Optionally close the client on app termination
    }
}

run().catch(console.error);

app.get('/', (req, res) => {
    res.send('Welcome to Group Assignment Backend');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
