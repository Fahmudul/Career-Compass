import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    const modalShow = true;
    setShowModal(modalShow);
    // // console.log(showModal);
  };

  // // console.log(location.pathname);
  const jobId = location.pathname.split("/").pop();
  // Tanstack query
  const {
    isLoading,
    data: JobDetails = {},
    isError,
    error,
  } = useQuery({
    queryKey: "view-details",
    queryFn: async () => {
      const { data } = await axiosSecure(`/allJobsCategory/${jobId}`);
      return data;
    },
  });
  // // console.log(user?.email);
  // // console.log(JobDetails?.ownerEmail);

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const data = await axiosSecure.patch(
        `/allJobsCategory/${id}`,
        applicantInfo
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Applied Successfully");
      const showModal = false;
      setShowModal(showModal);
      setTimeout(() => {
        window.location.href = "/appliedJobs";
      }, 1500);
    },
  });
  // Get todays date
  function getDateToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}/${month}/${day}`;
  }

  const closeModal = () => {
    const showModal = false;
    setShowModal(showModal);
  };

  // applicant info
  const applicantInfo = {
    name: user?.displayName,
    email: user?.email,
    jobTitle: JobDetails?.jobTitle,
    jobType: JobDetails?.subcategory,
    description: JobDetails?.description,
    ownerEmail: JobDetails?.ownerEmail,
    ownerName: JobDetails?.ownerName,
    salary: `${JobDetails?.minSalary}-${JobDetails?.maxSalary}`,
    numberOfApplicant: JobDetails?.applicantNumber,
    jobImage: JobDetails?.categoryImage,
    AppliedTime: getDateToday(),
    deadline: JobDetails?.applicationDeadLine,
  };
  // deadline date confirmation
  const deadLineOver = () => {
    const date1 = JobDetails?.applicationDeadLine;
    const date2 = getDateToday();
    const deadLine = new Date(date1);
    const applying = new Date(date2);
    deadLine.setHours(0, 0, 0, 0);
    applying.setHours(0, 0, 0, 0);
    // // console.log(date1, date2);
    // console.log(deadLine, applying);
    // console.log(applying <= deadLine);
    return applying <= deadLine;
  };
  const handleApplyForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const resumeLink = form.resumelink.value;
    applicantInfo.applicantResume = resumeLink;
    if (user?.email == JobDetails?.ownerEmail) {
      // console.log("matched");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't apply on your posted Job",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (!deadLineOver()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Application deadline has been over!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      await mutateAsync(jobId);
      // console.log("no matched");
    }
  };
  // console.log(JobDetails);
  return (
    <div className="relative">
      <section className={`shadow-2xl  rounded-3xl`}>
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={JobDetails.categoryImage}
              alt=""
            />
            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {JobDetails.jobTitle}
              </h1>
              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                “ {JobDetails.description} ”
              </p>
              <div className="space-y-3">
                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  Budget
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-bold">
                  {JobDetails.minSalary}-{JobDetails.maxSalary}$
                </p>
                <h1 className="text-lg font-semibold">
                  Already applied :{" "}
                  <span className="text-blue-500">
                    {JobDetails.applicantNumber}
                  </span>
                </h1>
              </div>
              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button className="btn bg-blue-400" onClick={handleShowModal}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="flex w-full justify-center items-center   min-h-[calc(100vh-27vh)] absolute top-0 left-0 backdrop-blur-xl">
          <div className="max-w-[480px] p-11 viewDetails rounded-3xl relative">
            <h1 className="text-2xl font-bold text-center">Job Title</h1>
            <button
              className="btn btn-circle absolute top-2 right-2 text-red-700 "
              onClick={() => closeModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <form action="" className="space-y-3" onSubmit={handleApplyForm}>
              <div>
                <label className="block ml-3 text-base font-bold mb-3">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="px-4 py-2  rounded-full hover:outline hover:outline-gray-400 text-lg w-full bg-slate-200"
                />
              </div>
              <div>
                <label className="block ml-3 text-base font-bold mb-3">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  className="px-4 py-2  rounded-full hover:outline hover:outline-gray-400 text-lg w-full  bg-slate-200 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block ml-3 text-base font-bold mb-3">
                  Resume
                </label>
                <input
                  type="text"
                  name="resumelink"
                  placeholder="Resume link"
                  required
                  className="px-4 py-2  rounded-full hover:outline hover:outline-gray-400 text-lg w-full bg-slate-200"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Submit Application"
                  className="btn bg-blue-400 mt-2"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
