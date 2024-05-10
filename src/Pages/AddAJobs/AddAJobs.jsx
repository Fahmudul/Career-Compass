import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddAJobs = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [jobPosteDate, setJobPostedDate] = useState("");
  function getDateToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    setJobPostedDate(getDateToday());
  }, []);

  // handle Form Submission
  const handleAddFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const description = form.description.value;
    const minSalary = form.min.value;
    const maxSalary = form.max.value;
    const categoryImage = form.photoUrl.value;
    const subcategory = form.subcategory.value;
    const postedTime = jobPosteDate;
    const applicantNumber = form.applicantNumber.value;
    const formData = {
      jobTitle: jobTitle,
      description: description,
      minSalary: minSalary,
      maxSalary: maxSalary,
      categoryImage: categoryImage,
      subcategory: subcategory,
      postedTime: postedTime,
      applicantNumber: applicantNumber,
    };
    // console.log(formData);
  };
  const polygonStyle = {
    clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
  };
  return (
    <div>
      <div className=" rounded-3xl flex flex-col lg:flex-row bg-[#ccc] justify-between w-[90%] mx-auto">
        <div
          className=" -green-500 flex justify-center items-center rounded-tl-3xl border border-green-500 rounded-bl-3xl  bg-[#818586] w-[30%]"
          style={polygonStyle}
        >
          <div className="text-center flex flex-col items-center gap-10">
            <img
              src={user?.photoURL}
              className="w-[100px] h-[100px] rounded-full  -red-500"
              alt=""
            />
            <div className="flex flex-col items-center space-y-3">
              <h1 className="text-3xl font-bold">
                {user?.displayName}hello user
              </h1>
              <h1 className="text-2xl font-semibold">Post a Job Opportunity</h1>
              <p className="w-1/2">
                Empower your hiring process by adding job listings. Reach
                potential candidates seamlessly
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 hello p-7 ">
          <form action="" className="flex mx-auto" onSubmit={handleAddFormData}>
            <div className="lg:w-full ">
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
                  name="description"
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
              <div className="flex flex-col px-2 py-3">
                <label className="block ml-3 text-lg font-bold mb-3">
                  Application Deadline
                </label>
                <DatePicker
                  selected={startDate}
                  className="text-gray-400 text-lg  py-2 rounded-full pl-3 hover:outline hover:outline-gray-400 cursor-pointer"
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="lg:w-full  ">
              <div className="flex flex-col px-2 py-3">
                <label className="block ml-3 text-lg font-bold mb-3">
                  Category Image
                </label>
                <input
                  type="text"
                  required
                  placeholder="PhotoUrl"
                  name="photoUrl"
                  className="px-4 py-3  rounded-full hover:outline hover:outline-gray-400 text-xl"
                />
              </div>
              <div className="flex flex-col px-2 py-3">
                <label className="block ml-3 text-lg font-bold mb-3">
                  Select Category
                </label>
                <select
                  className="select select-ed  rounded-full"
                  name="subcategory"
                >
                  <option>On-Site Job</option>
                  <option>Remote Job</option>
                  <option>Hybrid</option>
                  <option>Part-Time</option>
                </select>
              </div>
              <div className="flex flex-col px-2 py-3">
                <label className="block ml-3 text-lg font-bold mb-3">
                  Job Posted at
                </label>
                <input
                  type="text"
                  required
                  placeholder={jobPosteDate}
                  name="postedTime"
                  disabled
                  className="px-4 py-3 cursor-not-allowed  -gray-400 bg-white rounded-full hover:outline hover:outline-gray-400 text-xl"
                />
              </div>
              <div className="flex flex-col px-2 py-3">
                <label className="block ml-3 text-lg font-bold mb-3">
                  Job Applicants
                </label>
                <input
                  type="number"
                  required
                  placeholder="Number of Applicants"
                  name="applicantNumber"
                  className="px-4 py-3   -gray-400 bg-white rounded-full hover:outline hover:outline-gray-400 text-xl"
                />
              </div>
              <div className="flex justify-end mr-5">
                <input type="submit" value="Add Job" className="btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAJobs;
