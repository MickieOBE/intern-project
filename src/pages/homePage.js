import React from "react";
import Head from "../components/head";
import Work from "../components/work";

import Team from "../components/team/team";
import Footer from "../components/footer/footer";

import HomeAbout from "../components/homeAbout/homeAbout";
import Card from "../components/carouselComp/Card";
import Why from "../components/why_Choose_Us/index";

function HomePage() {
  return (
    <div className="w-full">
      <Head />
      <Why />
    
      <HomeAbout />
      {/* <Work /> */}
      <Team />
        <Card/>
      <Footer />
      {/* <Card /> */}
    </div>
  );
}

export default HomePage;
