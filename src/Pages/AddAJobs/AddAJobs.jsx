import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const AddAJobs = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="border rounded-3xl flex flex-col lg:flex-row">
        <div>
          <div>
            <img src={user?.photoURL} alt="" />
            <div>
              <h1>{user?.displayName}</h1>
              <h1>Post a Job Opportunity</h1>
              <p>
                Empower your hiring process by adding job listings. Reach
                potential candidates seamlessly
              </p>
            </div>
          </div>
        </div>
        <form action="" className="flex border border-red-500 flex-1">
          <div className="lg:w-full border">
            <div className="flex flex-col px-2 py-3">
              <label className="block ml-3 text-lg font-bold mb-3">
                Job Title
              </label>
              <input
                type="text"
                required
                placeholder="Title"
                name="jobTitle"
                className="px-4 py-3  rounded-full hover:outline hover:outline-gray-400 text-xl"
              />
            </div>
            <div className="flex flex-col px-2 py-3">
              <label className="block ml-3 text-lg font-bold mb-3">
                Job Description
              </label>
              <input
                type="text"
                required
                placeholder="Description"
                name="jobTitle"
                className="px-4 py-3  rounded-full hover:outline hover:outline-gray-400 text-xl"
              />
            </div>
            <div className="flex flex-col px-2 py-3">
              <label className="block ml-3 text-lg font-bold mb-3">
                Salary range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  required
                  placeholder="min $"
                  name="min"
                  className="px-4 borde py-3 w-3/4  rounded-full hover:outline hover:outline-gray-400 text-xl"
                />
                <input
                  type="number"
                  required
                  placeholder="max $"
                  name="max"
                  className="px-4 borde py-3  w-3/4 rounded-full hover:outline hover:outline-gray-400 text-xl"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-full border border-blue-500">
            <div className="flex flex-col px-2 py-3">
              <label className="block ml-3 text-lg font-bold mb-3">
                Category Image
              </label>
              <input
                type="text"
                required
                placeholder="PhotoUrl"
                name="jobTitle"
                className="px-4 py-3  rounded-full hover:outline hover:outline-gray-400 text-xl"
              />
            </div>
            <div className="flex flex-col px-2 py-3">
              <label className="block ml-3 text-lg font-bold mb-3">
                Select Category
              </label>
              <select
                className="select select-bordered  rounded-full"
                name="subcategory"
              >
                <option>On-Site Job</option>
                <option>Remote Job</option>
                <option>Hybrid</option>
                <option>Part-Time</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAJobs;
