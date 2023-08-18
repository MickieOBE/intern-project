import React from "react";
import Slider from "react-slick";
import ServiceCard from "../components/srviceComponent/ServiceCard";
import Head from "../components/head";



const AboutUsPage = () => {
  const servicesData = [
    {
      service: "Export & Import",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689757450/kurt-cotoaga-MP6FMO8khn4-unsplash_nuysh3.jpg",
    },
    {
      service: "Freight Fowarding",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690324675/markus-winkler-V0WETbEXG5Y-unsplash_ugwqov.jpg",
    },
    {
      service: "Customs Bokerage",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690324345/cdc-CMhVRKI6vSY-unsplash_sibbq4.jpg",
      id: 2,
    },
    {
      service: "Marketing &  Distribtion",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690324338/jason-goodman-Oalh2MojUuk-unsplash_pfonsk.jpg",
      id: 2,
    },
    {
      service: "WareHousing",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690324340/mauricio-gutierrez-SoiVEdJKzhY-unsplash_lrpykp.jpg",
      id: 2,
    },
    {
      service: "Bsiness Consulting",
      image:
        "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690324347/sebastian-herrmann-O2o1hzDA7iE-unsplash_sl5ebf.jpg",
      id: 2,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Head />
      <div className="w-full flex items-center justify-center bg-white">
        <div className="   p-4  text-center w-1/2">
        <p className="font-bold mb-2 text-red-600/60">OUR SERVICES</p>
        <p className="md:text-[3.5rem] text-[18px] font-extrabold mb-[4rem]  text-[#1F3042] ">
          Competitive & <br /><span className="text-red-600">Fast Services </span>For You
        </p>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi rerum
          ducimus officia odit, eligendi quam, impedit sapiente alias dolor,
          minus aliquam aspernatur enim saepe molestias perspiciatis. Veritatis
          sint officiis quasi?
        </p>
      </div>
      </div>
      <div className="p-4 bg-white h-[70vh]">
        <Slider {...settings}>
          {servicesData.map((data) => (
            <div key={data.id} className="px-4 ">
              <ServiceCard service={data.service} image={data.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUsPage;

// import React, { useEffect, useState } from "react";
// import ServiceCard from "../components/srviceComponent/ServiceCard";

// const servicesData = [
//   {
//     service: "Export & Import",
//     image:
//       "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689757450/kurt-cotoaga-MP6FMO8khn4-unsplash_nuysh3.jpg",
//       id: 0,
//   },
//   {
//     service: "Air Freight",
//     image:
//       "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689760255/amin-yarban-cN_dT5LRHEM-unsplash_krsr1g.jpg",
//          id: 0,
//   },
//    {
//     service: "Air Freight",
//     image:
//       "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689760255/amin-yarban-cN_dT5LRHEM-unsplash_krsr1g.jpg",
//          id: 0,
//   },

// ];
// const container= [
//   {
//     id: 0,
//   },
//   {
//     id: 1,
//   }
// ];

// const AboutUsPage = () => {
//   const [CurrentCardIndex, setCurrentCardIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//         setCurrentCardIndex((prevIndex) => (prevIndex + 1) % container.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);
//   console.log(CurrentCardIndex);
//     console.log("id-" + parseInt(servicesData[1].id, 10));

//   return (
//     <div className="flex justify-center items-center bg-red-600">
//       { container.map((cover)=>
//       { cover.id === CurrentCardIndex ? (<div>visible</div>): (<div  className={`flex items-center justify-center space-x-4 bg-green-600 p-4 w-full h-full `}>
//         {servicesData.map((data, index) => (
//           <div

//           >
//             <ServiceCard
//               key={index}
//               service={data.service}
//               image={data.image}
//             />
//           </div>
//         ))}
//       </div>)}
//       )}
//     </div>
//   );
// };

// export default AboutUsPage;
