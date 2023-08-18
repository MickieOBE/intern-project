import React from "react";
import Navbar from "./team/NavBar/NavBar";
import Image1 from "../assets/img/image1.png";
import { SlPlane } from "react-icons/sl";
import { GiCargoShip } from "react-icons/gi";
import { GiCargoCrate } from "react-icons/gi";

function head() {
  return (
    <div
      className="relative w-full h-[70vh] md:h-[130vh] lg:h-[130vh] md:flex lg:flex sm:grid sm:gap-2 sm:grid-cols-1"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689760255/amin-yarban-cN_dT5LRHEM-unsplash_krsr1g.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#1F3042] opacity-90 backdrop-filter backdrop-blur" />
      <div className="h-full w-full absolute   top-0 left-0   flex flex-col  justify-start ">
        <Navbar />
        <div className="w-full  md:w-[60vw] lg:w-[60vw] flex flex-col items-center justify-between   p-4 ">
          <div className=" flex flex-col  justify-center  p-4 ">
            <div className="">
              <h1
                className="text-[20px] md:text-[80px] lg:text-[80px]   mb-4 text-white font-extrabold"
                style={{ fontFamily: "Cabin" }}
              >
                Delivery Service{" "}
                <span className="text-[#A62226]">Trusted </span> Logistics
              </h1>
              <p
                className=" text-justify  text-white  md:w-3/4 w-full mb-6"
                style={{ fontFamily: "Open Sans" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                dignissimos architecto magni id explicabo nesciunt non eum
                reiciendis nemo amet. Necessitatibus nostrum impedit vero
                distinctio quisquam fugit soluta maiores ullam?
              </p>
            </div>
            <div className=" w-full  flex py-2 ">
              <button className="h-16 w-[10rem] md:w-[12rem] bg-red-600 hover:bg-red-600/0 hover:border-2 hover:border-red-600 mr-4 rounded-md font-bold text-white">About Us</button>
              <button className="h-16  md:w-[12rem] border-2 border-red-600 mr-4 rounded-md font-bold text-white hover:bg-red-600">Our Services</button>
            </div>
          </div>
          <div className="hidden md:flex lg:flex items-center justify-between  mt-8 w-full ">
            <div className="hover:bg-red-600  flex flex-col items-center justify-between p-4  shadow-md h-[12rem] w-[12rem] rounded-lg">
              <div className=" w-[6rem] h-[6rem] flex items-center justify-center">
                <SlPlane
                  size={50}
                  style={{ color: "#A62226" }}
                  className="hover:text-white"
                />
              </div>
              <h className="text-2xl text-white font-bold text-center">
                Freight Fowarding
              </h>
            </div>
            <div className="hover:bg-red-600  flex flex-col items-center justify-between p-4  shadow-md h-[12rem] w-[12rem] rounded-lg">
              <div className=" w-[6rem] h-[6rem] flex items-center justify-center">
                <GiCargoCrate
                  size={50}
                  style={{ color: "#A62226" }}
                  className="hover:text-white"
                />
              </div>
              <h className="text-2xl text-white font-bold text-center">
                WareHousing
              </h>
            </div>
            <div className="hover:bg-red-600  flex flex-col items-center justify-between p-4  shadow-md h-[12rem] w-[12rem] rounded-lg">
              <div className=" w-[6rem] h-[6rem] flex items-center justify-center">
                <GiCargoShip
                  size={50}
                  style={{ color: "#A62226" }}
                  className="hover:text-white"
                />
              </div>
              <h className="text-2xl text-white font-bold text-center">
                Customs Bokerage
              </h>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:flex absolute   right-0 bottom-0  ">
        <img
          src={Image1}
          alt=""
          className="md:left-1/2 lg:left-1/2  w-[250px]   md:w-auto lg:w-auto  "
        />
      </div>
    </div>
  );
}

export default head;
