import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ assignment = {}, loadedAssignments = [], setLoadedAssignments }) => {
    const { user } = useAuth();
    const { _id, applicant_email, description, difficulty, dueDate, marks, thumbnail, title } = assignment;

    const handleDelete = () => {
        if (user?.email !== applicant_email) {
            Swal.fire({
                icon: "error",
                title: "Unauthorized!",
                text: "You are not allowed to delete this assignment.",
            });
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/assignment/${_id}?email=${encodeURIComponent(user?.email || '')}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(async (res) => {
                        const data = await res.json();
                        if (!res.ok) {
                            throw new Error(data?.error || 'Failed to delete');
                        }
                        Swal.fire("Deleted!", "Assignment has been deleted.", "success");
                        setLoadedAssignments(prev => prev.filter(item => item._id !== _id));
                    })
                    .catch(error => {
                        console.error("Delete error:", error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.message || "Something went wrong!",
                        });
                    });
            }
        });
    };

    return (
        <div className="card w-full md:w-96 bg-white shadow-xl border hover:shadow-2xl transition-all duration-300">
            <figure className="relative h-56 overflow-hidden rounded-t-xl">
                <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">{difficulty}</div>
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">{description.split(" ").slice(0, 10).join(" ")}...</p>
                <div className="text-sm text-gray-500">
                    <p><strong>Marks:</strong> {marks}</p>
                    <p><strong>Due:</strong> {new Date(dueDate).toLocaleDateString()}</p>
                </div>
                {user?.email === applicant_email && (
                    <div className="card-actions justify-end">
                        <Link to={`/assignments/${_id}`}>
                         <button className="btn btn-error btn-sm">View Assignment</button>
                     </Link>
                         <Link to={`/updateAssignment/${_id}`}>
                         <button className="btn btn-error btn-sm">Edit</button>
                     </Link>
                        <button onClick={handleDelete} className="btn btn-error btn-sm">Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AssignmentCard;
