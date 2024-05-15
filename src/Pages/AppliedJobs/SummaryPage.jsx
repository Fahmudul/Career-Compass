import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import "./SummaryPage.css";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
const SummaryPage = () => {
  const pdfRef = useRef();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: summaryData = {} } = useQuery({
    queryKey: "summary-page",
    queryFn: async () => {
      const { data } = await axiosSecure(`/appliedApplicantsDetails/${id}`);
      return data;
    },
  });
  const downloadSummaryPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };
  // console.log(summaryData);
  return (
    <div className="">
      <div
        className="max-w-[600px] bg-white mx-auto my-0 shadow-xl rounded-3xl p-6 summary "
        ref={pdfRef}
      >
        <div className="header">
          <div className="full-name">
            <span className="first-name">{summaryData.name}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{summaryData.email}</span>
            <span className="separator" />
            <span className="phone">Phone: </span>
            <span className="phone-val">111-222-3333</span>
          </div>
          <div className="about">
            <span className="position">{summaryData.jobTitle} </span>
            <span className="desc">{summaryData.description}</span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Job details</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Salary demand</div>
                  <div className="addr">{summaryData.salary}$</div>
                  <div className="name mt-2">Job type</div>
                  <div className="addr ">{summaryData.jobType}</div>
                </div>
                <div className="right">
                  <div className="name">Buyer Name</div>
                  <div className="desc">{summaryData.ownerName}</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Applied on</div>
                  <div className="addr mt-3">{summaryData.AppliedTime}</div>
                </div>
                <div className="right">
                  <div className="name">Deadline</div>
                  <div className="desc mt-3">{summaryData.deadline}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Sample Institute of technology</div>
                  <div className="addr">San Fr, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">See resume </div>
                  <div className="desc">{summaryData.applicantResume}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              <div className="skills__item">
                <div className="left">
                  <div className="name">Javascript</div>
                </div>
                <div className="right">
                  <input id="ck1" type="checkbox" defaultChecked="" />
                  <label htmlFor="ck1" />
                  <input id="ck2" type="checkbox" defaultChecked="" />
                  <label htmlFor="ck2" />
                  <input id="ck3" type="checkbox" />
                  <label htmlFor="ck3" />
                  <input id="ck4" type="checkbox" />
                  <label htmlFor="ck4" />
                  <input id="ck5" type="checkbox" />
                  <label htmlFor="ck5" />
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="left">
                <div className="name">CSS</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox" defaultChecked="" />
                <label htmlFor="ck1" />
                <input id="ck2" type="checkbox" defaultChecked="" />
                <label htmlFor="ck2" />
                <input id="ck3" type="checkbox" />
                <label htmlFor="ck3" />
                <input id="ck4" type="checkbox" />
                <label htmlFor="ck4" />
                <input id="ck5" type="checkbox" />
                <label htmlFor="ck5" />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Interests</div>
            <div className="section__list">
              <div className="section__list-item">Football, programming.</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="btn flex items-center mt-4 text-gray-700 dark:text-gray-200 "
            onClick={downloadSummaryPdf}
          >
            <FaDownload className="w-6 h-6" />
            <h1 className=" text-sm">Download Summary</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
