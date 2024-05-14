import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateJobInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  // Tanstack query
  const { data: JobDetails = {}, isLoading } = useQuery({
    queryKey: "update-job",
    queryFn: async () => {
      const { data } = await axiosSecure(`/allJobsCategory/${id}`);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (updatedInfo) => {
      const { data } = await axiosSecure.post(
        `/allJobsCategory/${id}`,
        updatedInfo
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Job updated successfully");
      setTimeout(() => {
        window.location.href = "/myJobs";
      }, 1500);
    },
  });

  console.log(JobDetails);
  //   console.log(id);
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  //   const [jobPosteDate, setJobPostedDate] = useState("");

  const applicationDeadLineString = (deadLineDate) => {
    const deadLineString = deadLineDate.toLocaleDateString();
    const ddmmyy = deadLineString.split("/");
    console.log(ddmmyy);
    const formattedDate = `${ddmmyy[2]}/${ddmmyy[1]}/${ddmmyy[0]}`;
    console.log(formattedDate);
    return formattedDate;
  };
  // console.log(startDate.toString());

  //   update form
  const handleUpdateFormData = async (e) => {
    e.preventDefault();
    const form = e.target;

    const jobTitle = form.jobTitle.value;
    const description = form.description.value.slice(0, 175);
    const minSalary = form.min.value;
    const maxSalary = form.max.value;
    const categoryImage = form.photoUrl.value;
    const subcategory = form.subcategory.value;
    const postedTime = JobDetails.postedTime;
    // const applicantNumber = parseInt(form.applicantNumber.value);
    const updatedJobInfo = {
      ownerEmail: user?.email,
      jobTitle: jobTitle,
      description: description,
      minSalary: minSalary,
      maxSalary: maxSalary,
      categoryImage: categoryImage,
      subcategory: subcategory,
      postedTime: postedTime,
      //   applicantNumber: applicantNumber,
      ownerName: user?.displayName,
      applicationDeadLine: applicationDeadLineString(startDate),
    };
    console.log(updatedJobInfo);

    // console.log(import.meta.env.SERVER_API_URL);
    // send jobData to server
    await mutateAsync(updatedJobInfo);

    // console.log(SERVER_API_URL);
  };
  const borderRadius = {
    borderRadius: "0% 37% 31% 25% / 25% 45% 38% 0%",
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-5xl font-bold mb-7">
          Modify Job Information
        </h1>
        <div className=" rounded-3xl flex flex-col lg:flex-row bg-[#ccc] justify-between w-[90%] mx-auto">
          <div
            className=" -green-500 flex justify-center items-center rounded-tl-3xl  rounded-bl-3xl  bg-[#818586] w-[30%]"
            style={borderRadius}
          >
            <div className="text-center flex flex-col items-center gap-10">
              <img
                src={user?.photoURL}
                className="w-[100px] h-[100px] rounded-full  -red-500"
                alt=""
              />
              <div className="flex flex-col items-center space-y-3">
                <h1 className="text-3xl font-bold">{user?.displayName}</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-1 hello p-7 ">
            <form
              action=""
              className="flex mx-auto"
              onSubmit={handleUpdateFormData}
            >
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
                    placeholder={JobDetails?.postedTime}
                    name="postedTime"
                    disabled
                    className="px-4 py-3 cursor-not-allowed   bg-white rounded-full hover:outline hover:outline-gray-400 text-xl"
                  />
                </div>
                <div className="flex flex-col px-2 py-3">
                  <label className="block ml-3 text-lg font-bold mb-3">
                    Job Applicants
                  </label>
                  <input
                    type="number"
                    required
                    defaultValue={JobDetails?.applicantNumber}
                    disabled
                    placeholder="Number of Applicants"
                    name="applicantNumber"
                    className="px-4 py-3   cursor-not-allowed bg-white rounded-full hover:outline hover:outline-gray-400 text-xl"
                  />
                </div>
                <div className="flex justify-end mr-5">
                  <input type="submit" value="Update Job" className="btn" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateJobInfo;
