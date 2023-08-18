import React from "react";
// import Image1 from "../../assets/image1.jpg";
// import {UsersIcon} from 'react-icons/us'
// import Logo from "../../assets/logo-2.png";

function Footer() {
  const footerData = [
    {
      tittle: "Usefull Links",
      svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
      content: [
        {
          name: "Home",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
        {
          name: "About",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
        {
          name: "Services",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
        {
          name: "contact",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
      ],
    },
    {
      tittle: "Focus Area",
      svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
      content: [
        {
          name: "urgent care",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
        {
          name: "preventive health",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
        {
          name: "mental health",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
        {
          name: "health advice",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
        },
      ],
    },
    {
      tittle: "Contact",
      svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687859047/icons8-tick-24_hrqn1p.png",
      content: [
        {
          name: "phone",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687860921/icons8-phone-30_ejvmr1.png",
        },
        {
          name: "email",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687860921/icons8-email-50_srz7k1.png",
        },
        {
          name: "location",
          svg: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687860921/icons8-location-50_zleymz.png",
        },
      ],
    },
  ];
  return (
    <div className="m-4 w-full border-t-2">
      <div className="md:h-[40vh] md:flex items-center justify-between   ">
        <div className="md:w-[25rem] h-full flex flex-col justify-center p-2  ">
          <div className="w-[15rem] h-[5rem] bg-green-600">
            {/* <img
              src={Logo}
              alt="company logo"
              className="w-full h-full object-cover "
            /> */}
          </div>

          <p className="text-[#0F123B]/60 text-sm">
            Primetel believes in challenging the conventional healthcare systems
            with the ever-expanding technological advancements in providing
            efficient, customized, and convenient healthcare services to people
            in rural areas.
          </p>
        </div>
        <div className=" md:w-[75vw] h-full p-2 flex items-center justify-center m-8 ">
          <div className=" h-full w-[50rem] grid grid-cols-2 gap-2 md:flex items-center justify-end md:p-8 md:space-x-8 ">
            {footerData.map((data) => (
              <div className="h-[10rem]  ">
                <h1 className="text-xl text-[#0F123B] font-bold mb-4">
                  {data.tittle}
                </h1>
                {data.content.map((listData) => (
                  <ul className="text-[#0F123B]/60 text-sm">
                    <li>
                      <div className="flex items-center justify-start">
                        <img
                          src={listData.svg}
                          alt=""
                          className="w-[1rem] h-[1rem] object-cover mr-2"
                        />{" "}
                        {listData.name}
                      </div>{" "}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
            <div className="h-[10rem] md:px-4  ">
              <h1 className="text-xl font-bold mb-4 text-[#0F123B]">
                Social Media
              </h1>
              <div className="grid grid-cols-2 gap-2 md:flex items-center justify-between px-2 ">
                <div className=" w-8 rounded-full">
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687811518/icons8-facebook-50_rmmudy.png"
                    alt="face book svg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-8 rounded-full">
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687811518/icons8-instagram-48_jl2od5.png"
                    alt="face book svg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-8 rounded-full">
                  <img
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687811519/icons8-twitter-30_az2vz7.png"
                    alt="face book svg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="px-32 flex justify-end">
          <p className="text-sm  text-[#0F123B]/80 ">
            Copyright © 2023 Primetel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
