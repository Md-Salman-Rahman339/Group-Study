import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const AssignmentDetails = () => {
    const assignmentD=useLoaderData();
    const {
        _id,
        title,
        description,
        marks,
        thumbnail,
        difficulty,
        dueDate,
       
      }=assignmentD;
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={thumbnail}
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">
         {description}
        </p>
        <h1>Marks:{marks}</h1>
        <h1>Difficulty:{difficulty}</h1>
        <h1>Due Date:{dueDate}</h1>
       <Link to={`/assignmentSubmission/${_id}`}>  <button className="btn btn-primary">Take Assignment</button></Link>
      </div>
    </div>
  </div>
  )
}

export default AssignmentDetails
