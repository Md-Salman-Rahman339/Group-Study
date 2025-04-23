import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyAssignments = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-assignment?email=${user.email}`)
      .then(res => res.json())
      .then(data => setAssignments(data));
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl mb-4">My Submitted Assignments: {assignments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Status</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
              <th>Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(assignment => (
              <tr key={assignment._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{assignment.title}</td>
                <td>
                  <span className={`badge ${assignment.status === 'Checked' ? 'badge-success' : 'badge-warning'}`}>
                    {assignment.status}
                  </span>
                </td>
                <td>{assignment.marks}</td>
                <td>{assignment.obtainedMarks || '-'}</td>
                <td>{assignment.feedback || 'No feedback yet'}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignments;
