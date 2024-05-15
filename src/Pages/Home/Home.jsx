import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { Slide } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";
import JobCard from "../Component/JobCard/JobCard";
import { useState } from "react";
import Testimonial from "../Component/Testimonial/Testimonial";
import FAQs from "../Component/FAQ/FAQ";
function JobCategoryCard({ title, description }) {
  return (
    <div className="lg:w-[35%] text-left  shadow-lg rounded-lg overflow-hidden m-4 bg-blur text-white">
      <div className="p-6 flex flex-col gap-y-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#e8e3e3]">
          {title}
        </h1>
        <p className=" text-xl mb-4 text-[#afaaaa]">{description}</p>

        <Slide direction="up">
          <Link className="btn btn-ghost bg-blue-400 flex text-white font-bold py-2 px-4 rounded-full text-center ">
            See More
          </Link>
        </Slide>
      </div>
    </div>
  );
}

const Home = () => {
  // show all button state
  const [showAll, setShowAll] = useState(false);

  // Get list of Job data from data base
  const jobCategoriesInfo = useLoaderData();
  // // console.log(jobCategoriesInfo);
  const onSiteJobs = jobCategoriesInfo.filter(
    (job) => job.subcategory === "On-Site Job"
  );
  // // console.log("onSiteJobs", onSiteJobs);
  const remoteJobs = jobCategoriesInfo.filter(
    (job) => job.subcategory === "Remote Job"
  );
  // // console.log("remoteJobs", remoteJobs);
  const hybridJobs = jobCategoriesInfo.filter(
    (job) => job.subcategory === "Hybrid"
  );
  // // console.log("hybridJobs", hybridJobs);
  const partTimeJobs = jobCategoriesInfo.filter(
    (job) => job.subcategory === "Part-Time"
  );
  // // console.log("partTimeJobs", partTimeJobs);
  const tabStyle = {
    padding: "0px 10px",
  };
  // console.log(showAll);
  return (
    <div>
      {/**Dynamic title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareerCompass | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/**Banner section */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_1  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <JobCategoryCard
              title="Office Administrator"
              description="Join our team as an Office Administrator and be the heart of our bustling office environment. Manage administrative tasks, coordinate meetings, and ensure smooth operations in our vibrant workplace"
            ></JobCategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_2  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <JobCategoryCard
              title="Virtual Assistant"
              description="Work remotely as a Virtual Assistant and support busy professionals with administrative tasks. Enjoy the flexibility of working from home while providing excellent support to clients"
            ></JobCategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_3  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <JobCategoryCard
              title="Hybrid Project Manager"
              description="Seeking a skilled Project Manager for a hybrid role, blending remote work with on-site project oversight. Lead cross-functional teams, manage project timelines, and ensure successful project delivery"
            ></JobCategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_4  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <JobCategoryCard
              title="Part-Time Receptionist"
              description="Looking for a Part-Time Receptionist to join our team. Greet visitors, answer phones, and assist with administrative tasks in our office during afternoon hours"
            ></JobCategoryCard>
          </div>
        </SwiperSlide>
      </Swiper>

      {/**Category Tabs */}
      <div className=" lg:mt-[100px]">
        <h1 className="font-bold  text-center text-3xl  md:text-4xl lg:text-5xl lg:mb-10">
          Navigate Your Career
        </h1>
        <Tabs className=" text-center">
          <TabList style={{ marginBottom: "60px" }}>
            <Tab style={{ padding: "5px 20px", fontSize: "20px" }}>
              On-Site Job
            </Tab>
            <Tab style={{ padding: "5px 20px", fontSize: "20px" }}>
              Remote Job
            </Tab>
            <Tab style={{ padding: "5px 20px", fontSize: "20px" }}>Hybrid</Tab>
            <Tab style={{ padding: "5px 20px", fontSize: "20px" }}>
              Part-Time
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-7">
              {showAll
                ? onSiteJobs.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))
                : onSiteJobs
                    .slice(0, 8)
                    .map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-7">
              {showAll
                ? remoteJobs.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))
                : remoteJobs
                    .slice(0, 8)
                    .map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-7">
              {showAll
                ? hybridJobs.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))
                : hybridJobs
                    .slice(0, 8)
                    .map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-x-7">
              {showAll
                ? partTimeJobs.map((job) => (
                    <JobCard key={job._id} job={job}></JobCard>
                  ))
                : partTimeJobs
                    .slice(0, 8)
                    .map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
        </Tabs>
        <div className="flex justify-center mt-5">
          <button
            className="btn btn-ghost"
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      {/**Testimonial */}
      <Testimonial />

      {/**Testimonial */}
      <FAQs />
    </div>
  );
};

export default Home;
