import React from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
const AssignmentSubmission = () => {
    const {user}=useAuth();
    const { id } = useParams();
    console.log(id)
    const submitAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const liveUrl = form.liveUrl.value;
        const github = form.github.value;
        

        // console.log(liveUrl, github);
        const assignmentSubmit={
            assign_id:id,
            applicant_email:user.email,
            liveUrl,
            github,
            status: 'pending',
        }
        fetch('http://localhost:5000/my-assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentSubmit)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your assignment has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={submitAssignment} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Live page URL</span>
                    </label>
                    <input type="url" name="liveUrl" placeholder="Live page UR" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                </div>
               
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AssignmentSubmission
