import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const TableRow = ({ job, handleDeleteButton, handleUpdateButton }) => {
  const {
    minSalary,
    maxSalary,
    jobTitle,
    postedTime,
    applicationDeadLine,
    _id,
  } = job;

  return (
    <tr>
      <td className="px-4 py-4  font-medium whitespace-nowrap">
        <div>
          <h1 className="font-medium text-gray-800 dark:text-white  lg:text-lg text-base">
            {jobTitle}
          </h1>
        </div>
      </td>
      <td className="px-12 py-4  font-medium whitespace-nowrap">
        <div className="inline px-3 py-1  font-normal rounded-full text-emerald-500 gap-x-2 lg:text-lg text-base bg-emerald-100/60 dark:bg-gray-800">
          {postedTime}
        </div>
      </td>
      <td className="px-4 py-4  whitespace-nowrap">
        <div>
          <h1 className="text-gray-700 dark:text-gray-200 lg:text-lg text-base">
            {minSalary}$ - {maxSalary}$
          </h1>
        </div>
      </td>
      <td className="px-4 py-4  whitespace-nowrap">
        <div className="flex items-center">
          <div className="inline px-3 py-1  font-normal rounded-full lg:text-lg text-base text-blue-800 gap-x-2 bg-blue-200 dark:bg-gray-800">
            {applicationDeadLine}
          </div>
        </div>
      </td>
      <td className=" text-center ">
        <button className="" onClick={() => handleDeleteButton(_id, "delete")}>
          <RiDeleteBin5Line className="w-6 h-6 mr-5 hover:fill-red-400" />
        </button>
        <button className="">
          <FaRegEdit
            onClick={() => handleUpdateButton(_id, "update")}
            className="w-6 h-6 hover:fill-blue-600"
          />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
