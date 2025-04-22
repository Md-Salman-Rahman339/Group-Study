import React, { useEffect, useState } from 'react'
import AssignmentCard from './AssignmentCard'

const Assignments = () => {
    const [assignments,setAssignment]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/assignment')
        .then(res=>res.json())

        .then(data=>{
            console.log('Fetched assignments:', data);
            setAssignment(data);
        })
    },[])
  return (
    <div>
      <div  className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
    assignments?.length > 0 ? (
      assignments.map(assignment =>
        assignment && <AssignmentCard  loadedAssignments={assignments}
        setLoadedAssignments={setAssignment} key={assignment._id} assignment={assignment} />
      )
    ) : (
      <p>No assignments found</p>
    )
  }
      </div>
    </div>
  )
}

export default Assignments
