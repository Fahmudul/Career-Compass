import React, { useContext } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { AuthContext } from "../../AuthProvider/AuthProvider";
const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    data: myPostedJobs = [],
    error,
    isError,
  } = useQuery({
    queryKey: "my-jobs",
    queryFn: async () => {
      const { data } = await axiosSecure(`/myPostedJobs/?email=${user.email}`);
      return data;
    },
  });
  console.log(myPostedJobs);
  return <div></div>;
};

export default MyJobs;
