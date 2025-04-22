import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateAssignment = () => {
  const assignment = useLoaderData();
//   console.log("Loaded assignment:", assignment);
  const navigate = useNavigate();
  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
    applicant_email,
  } = assignment;

  const [selectedDate, setSelectedDate] = useState(() => {
    const parsed = new Date(dueDate);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
  });

  const handleUpdateAssignment = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;

    const updatedAssignment = {
      applicant_email,
      title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate: selectedDate,
    };

    fetch(`http://localhost:5000/assignment/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Assignment updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          navigate('/');
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Assignment</h1>
        <p className="py-6 max-w-2xl mx-auto">
          Easily update your existing assignment details such as title,
          description, difficulty, marks, and due date. Make sure to verify the
          information carefully before submitting the form.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-4xl mx-auto shadow-2xl mb-20">
        <form onSubmit={handleUpdateAssignment} className="card-body">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Assignment Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Marks</span>
              </label>
              <input
                type="number"
                name="marks"
                defaultValue={marks}
                placeholder="Total Marks"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Difficulty</span>
              </label>
              <select
                name="difficulty"
                defaultValue={difficulty}
                className="select select-bordered"
                required
              >
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="input input-bordered w-full"
                dateFormat="yyyy-MM-dd"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Thumbnail URL</span>
              </label>
              <input
                type="url"
                name="thumbnail"
                defaultValue={thumbnail}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Assignment Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Assignment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
