import React from "react";
import { Navbar, Hero, Sidebar, Info } from "../components";
import { infoData } from "../data";
const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Info det={infoData[0]} />
      <Info det={infoData[1]} />
    </>
  );
};

export default Home;
