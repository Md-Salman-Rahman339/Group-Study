import React from 'react'
import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import aplicationL from '../../assets/lottie/Job application.json';
import Lottie from 'lottie-react';

const Cassignments = () => {
    const { id } = useParams();
    const [dueDate, setDueDate] = useState(new Date());
  
    const handleAssignmentSubmit = e => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const marks = form.marks.value;
      const thumbnail = form.thumbnail.value;
      const difficulty = form.difficulty.value;
  
      console.log({
        title,
        description,
        marks,
        thumbnail,
        difficulty,
        dueDate,
      });
    };
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <Lottie animationData={aplicationL}></Lottie>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleAssignmentSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea name="description" placeholder="Assignment Description" className="textarea textarea-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input type="number" name="marks" placeholder="Total Marks" className="input input-bordered" required min="0" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail Image URL</span>
            </label>
            <input type="url" name="thumbnail" placeholder="Image URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Difficulty</span>
            </label>
            <select name="difficulty" className="select select-bordered" required>
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Date</span>
            </label>
            <DatePicker
              selected={dueDate}
              onChange={date => setDueDate(date)}
              className="input input-bordered w-full"
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create Assignment</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Cassignments
