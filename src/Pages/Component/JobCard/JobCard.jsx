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
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex={0}
              role="link"
            >
              I Built A Successful Blog In One Year
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center my-3 justify-between">
              <div className="flex items-center ">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200 max-w-[100px]">
                  {ownerName}
                </p>
              </div>
              <div className="flex items-center ju">
                <Link to={`/jobDetails/${_id}`}>
                  <button className="btn px-2 py-1">View details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
