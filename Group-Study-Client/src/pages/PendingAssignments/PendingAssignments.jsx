import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Dialog } from '@headlessui/react'; 

const PendingAssignments = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [marks, setMarks] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/pending-assignments?email=${user.email}`)
      .then(res => res.json())
      .then(data => setAssignments(data));
  }, [user.email]);

  const openModal = (assignment) => {
    setSelectedAssignment(assignment);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5000/mark-assignment/${selectedAssignment._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        obtainedMarks: marks,
        feedback: feedback
      }),
    })
      .then(res => res.json())
      .then(() => {
        setAssignments(assignments.filter(a => a._id !== selectedAssignment._id));
        setIsOpen(false);
        setFeedback('');
        setMarks('');
      });
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">Pending Assignments</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Total Marks</th>
            <th>Examinee</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(a => (
            <tr key={a._id}>
              <td>{a.title}</td>
              <td>{a.totalMarks}</td>
              <td>{a.applicant_name}</td>
              <td><button onClick={() => openModal(a)} className="btn btn-primary btn-sm">Give Mark</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    
      {isOpen && selectedAssignment && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Evaluate: {selectedAssignment.title}</h3>
            <p className="py-2"><strong>Notes:</strong> {selectedAssignment.notes}</p>
            <a
              href={selectedAssignment.docLink}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Google Doc
            </a>

            <input
              type="number"
              placeholder="Enter Marks"
              className="input input-bordered w-full my-2"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
            <textarea
              placeholder="Enter Feedback"
              className="textarea textarea-bordered w-full my-2"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>

            <div className="modal-action">
              <button onClick={handleSubmit} className="btn btn-success">Submit</button>
              <button onClick={() => setIsOpen(false)} className="btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignments;
