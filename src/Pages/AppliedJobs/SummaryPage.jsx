import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SummaryPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: summaryData = {} } = useQuery({
    queryKey: "summary-page",
    queryFn: async () => {
      const { data } = await axiosSecure(`/appliedApplicantsDetails/${id}`);
      return data;
    },
  });

  console.log(summaryData);
  return <div></div>;
};

export default SummaryPage;
