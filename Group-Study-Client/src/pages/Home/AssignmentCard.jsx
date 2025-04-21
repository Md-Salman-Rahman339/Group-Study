import React from 'react'

const AssignmentCard = ({assignment}) => {
    const { title,  description,marks,thumbnail,difficulty,dueDate}=assignment;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description.split(" ").slice(0,5).join(" ")}</p>
      <h4>{marks}</h4>
      <h4>{difficulty}</h4>
      <h2>{dueDate}</h2>
    </div>
    <figure>
      <img
        src={thumbnail}
        alt="assignment" />
    </figure>
  </div>
  )
}

export default AssignmentCard
