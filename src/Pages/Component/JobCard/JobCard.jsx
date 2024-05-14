import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    categoryImage,
    minSalary,
    maxSalary,
    applicantNumber,
    ownerName,
    applicationDeadLine,
    postedTime,
    _id,
    jobTitle,
    description,
  } = job;
  return (
    <div>
      <div className="min-w-xl max-w-[400px] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 relative">
        <img
          className="object-cover w-full h-64"
          src={categoryImage}
          alt="Article"
        />
        <div className="absolute top-0 backdrop-blur-xl p-3">
          <span className="text-lg text-[#ccc] dark:text-gray-300 font-semibold">
            Posted on : {postedTime}
          </span>
          <div className="text-lg text-[#ccc] dark:text-gray-300 font-semibold">
            Deadline : {applicationDeadLine}
          </div>
        </div>
        <div className="p-6">
          <div>
            <span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
              {jobTitle}
            </span>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center my-3 justify-between ">
              <div className="flex items-center ">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200 ">
                  {ownerName}
                </p>
              </div>
              <div className="font-semibold text-lg">
                <p>
                  Budget <br />{" "}
                  <span>
                    {minSalary}-{maxSalary}$
                  </span>
                </p>
                <p>
                  Applied : <span>{applicantNumber}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link to={`/jobDetails/${_id}`}>
                <button className="btn">View details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
