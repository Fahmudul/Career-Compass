import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { BiDetail } from "react-icons/bi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [categoryJob, setCategoryJob] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: "applied-jobs",
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/appliedApplicants/?email=${user.email}`
      );
      setAppliedJobs(data);
      setCategoryJob(data);
      return data;
    },
  });
  // console.log(appliedJobs)
  // console.log(categoryJob);

  const getSelectCategoryValue = (e) => {
    // console.log(e.target.value);
    const filteredValue = e.target.value;
    if (filteredValue == "All") {
      setCategoryJob(appliedJobs);
      // console.log(categoryJob);
    } else {
      const filteredCategory = appliedJobs.filter(
        (job) => job.jobType == filteredValue
      );
      setCategoryJob(filteredCategory);
      // console.log(filteredCategory);
      // console.log(categoryJob);
    }
  };
  // console.log(appliedJobs);

  // console.log(categoryJob);
  if (categoryJob.length <= 0) {
    return (
      <div>
        <p className="font-bold text-xl lg:text-4xl text-center ">
          No Job Applied yet!
        </p>
        <p className="text-center mt-5">
          <Link
            to="/allJobs"
            className="text-blue-500 font-bold text-lg underline "
          >
            Apply from here ->
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div className="">
      <div className="flex justify-end mb-5">
        <div className="flex items-center gap-x-3">
          <h1 className="text-xl font-bold ">SortBy</h1>
          <select
            className="select select-ed  rounded-full text-base"
            name="subcategory"
            onChange={getSelectCategoryValue}
          >
            <option>All</option>
            <option>On-Site Job</option>
            <option>Remote Job</option>
            <option>Hybrid</option>
            <option>Part-Time</option>
          </select>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-4 gap-y-5 mx-auto ">
          {categoryJob.map((job) => (
            <div
              key={job._id}
              className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                className="object-cover object-center w-full h-56"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <div className="flex items-center px-6 py-3 bg-gray-900">
                <svg
                  aria-label="headphones icon"
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
                  />
                </svg>
                <h1 className="mx-3 text-lg font-semibold text-white">
                  Focusing
                </h1>
              </div>
              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Patterson johnson
                </h1>
                <p className="py-2 text-gray-700 dark:text-gray-400">
                  Full Stack maker &amp; UI / UX Designer , love hip hop music
                  Author of Building UI.
                </p>
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    aria-label="suitcase icon"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 11H10V13H14V11Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                    />
                  </svg>
                  <h1 className="px-2 text-sm">{job?.jobType}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    aria-label="location pin icon"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                    />
                  </svg>
                  <h1 className="px-2 text-sm">California</h1>
                </div>
                <div className="flex justify-end">
                  <Link to={`/appliedApplicants/${job._id}`}>
                    <button className="btn flex items-center mt-4 text-gray-700 dark:text-gray-200">
                      <BiDetail className="w-6 h-6" />
                      <h1 className=" text-sm">View Summary</h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
