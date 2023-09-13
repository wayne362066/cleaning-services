import React from "react";
import Title from "../components/homepage/Title";
import Process from "../components/homepage/Process";
import StaffInfos from "../components/homepage/StaffInfos";
import Navbar from "../components/navbar";
import Indexbg from "../components/homepage/indexbg";
import Service from "../components/homepage/Service";
import Topic from "../components/homepage/Topic";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Indexbg />
      <Service />
      <div className="service-process">
        <Title />
        <Process />
      </div>
      <StaffInfos />
      <Topic />
      <Footer />
    </>
  );
};

export default Home;
