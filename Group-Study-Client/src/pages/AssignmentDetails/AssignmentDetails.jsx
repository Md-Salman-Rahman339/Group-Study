import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignmentD = useLoaderData();
  const {
    _id,
    title,
    description,
    marks,
    thumbnail,
    difficulty,
    dueDate,
  } = assignmentD;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 mb-6 rounded-3xl">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row transition-all duration-300 ease-in-out">
        <img
          src={thumbnail}
          alt={title}
          className="w-full lg:w-1/2 h-80 object-cover"
        />
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base">
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="font-semibold">Marks:</span> {marks}
              </div>
              <div className="bg-yellow-100 px-4 py-2 rounded-lg">
                <span className="font-semibold">Difficulty:</span> {difficulty}
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="font-semibold">Due Date:</span> {dueDate}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link to={`/assignmentSubmission/${_id}`}>
              <button className="btn btn-error w-full md:w-auto px-6 py-3 text-white font-semibold rounded-xl shadow hover:shadow-md transition duration-300">
                Take Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
