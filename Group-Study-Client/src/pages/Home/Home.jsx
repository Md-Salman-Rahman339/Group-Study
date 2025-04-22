import React from 'react'
import Banner from './Banner'
import Faq from './Faq'
import AssignmentCard from './AssignmentCard'
import Assignments from './Assignments'

const Home = () => {
  return (
    <div className='mb-6'>
      
     <div className='mb-6'>
     <Banner></Banner>
     </div>
     <div className='mb-6'>
        <Assignments></Assignments>
     </div>
      <div className='mb-6'>
      <Faq></Faq>
      </div>

    </div>
  )
}

export default Home
