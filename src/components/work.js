import React from "react";

import cargoImage from '../assets/img/cargo.png'

function Work() {
  return (
    <div className=" md:h-[100vh] md:flex mt-12 w-full border-t-2 ">
      <div className="w-1/2  min-w-[250px] flex items-center justify-center  ">
    <div className=" md:w-[30rem]  h-3/4 flex flex-col  justify-between md:p-8 p-4 md:text-start text-justify">
          <h1 className="font-bold text-[#0F123B] text-3xl">Working with us is a pleasure</h1>
        <p className="text-[#0F123B]/60">
          Don't let your uses guess by attaching tooltips and popoves to any
          element. Just make sure you enable them first via JavaScript.
        </p>
        <p className="text-[#0F123B]/60">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to go. Just
          make sure you enable them first via JavaScript.
        </p>
        <div className=" flex items-center justify-end">
          <button className="bg-[#443F6D] border-2  rounded-xl shadow-md md:p-4 p-2 text-white md:text-xl font-bold">learn More</button>
        </div>
    </div>
      </div>
      <div className=" hidden hidd md:w-1/2 md:h-full  md:flex items-center justify-center p-4">
        <img src={cargoImage} alt="" className="w-full h-full object-cover"/>
        {/* <Card/> */}
      </div>
    </div>
  );
}

export default Work;
