import React, { useEffect, useState } from 'react'
import AssignmentCard from './AssignmentCard'

const Assignments = () => {
    const [assignments,setAssignment]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/assignment')
        .then(res=>res.json())
        .then(data=>{
            setAssignment(data);
        })
    },[])
  return (
    <div>
      <div>
        {
            assignments.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment} ></AssignmentCard>)
        }
      </div>
    </div>
  )
}

export default Assignments
