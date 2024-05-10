import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { Slide } from "react-awesome-reveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Home.css";
function JobCategoryCard({ title, description }) {
  return (
    <div className="lg:w-[35%] text-left  shadow-lg rounded-lg overflow-hidden m-4 bg-blur text-white">
      <div className="p-6 flex flex-col gap-y-2">
        <Slide>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#e8e3e3]">
            {title}
          </h1>
          <p className=" text-xl mb-4 text-[#afaaaa]">{description}</p>
        </Slide>
        <Slide direction="right">
          <Link className="btn btn-ghost bg-gray-800 flex text-white font-bold py-2 px-4 rounded-full text-center ">
            See More
          </Link>
        </Slide>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareerCompass | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
    </div>
  );
};

export default Home;
