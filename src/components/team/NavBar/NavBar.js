import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import {AiOutlineLogin} from "react-icons/ai";

const Navbar = () => {
  const menu = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayMenuList, setDisplayMenuList] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 800px)");
  useEffect(() => {
    {
      isSmallDevice ? setDisplayMenu(true) : setDisplayMenu(false);
      // document.addEventListener("click", menuClick, true);
    }
  });

  // const menuClick = (e) => {
  //   if (!menu.current.contains(e.target)) {
  //     setDisplayMenuList(false);
  //   }
  // };
  const menuClicked = () => {
    setDisplayMenuList(!displayMenuList);
    // if(!menu.current.contains(e.target)){
    //   setDisplayMenuList(false);
    // }
  };

  return (
    <div className=" h-[10vh] md:h-[17vh] lg:h-[17vh] flex justify-between  w-full  shadow-md px-4">
      <div className="bg-white/60 flex items-center justify-center  w-1/4 text-white p-2">
        <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1690281680/Group_1_uwu4sd.png" alt="" />
      </div>
      {displayMenu ? (
        <div
          ref={menu}
          className=" h-full w-1/4  flex items-center justify-center p-4 "
          onClick={() => {
            menuClicked();
          }}
        >
          <RiMenu3Fill size={25} style={{ color: "red" }} />
          {displayMenuList ? (
            <div className="absolute md:top-[19vh] top-[9vh] left-0   bg-[#1F3042]  w-[20rem] h-1/2 text-white font-bold ">
              <ul className="h-3/4  flex flex-col justify-between p-4">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallerys</li>
              </ul>
              <div className="w-full h-1/4  flex  justify-end ">
                <button className="bg-red-600 h-full w-1/2 text-white">
                  start
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex items-center justify-end w-3/4 bg-[#1F3042] ">
          <ul className=" flex items-center justify-between w-1/2 h-[100%] text-white p-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Galleryz</li>
          </ul>
          <div className=" h-full flex items-center justify-center w-1/4">
          <button className="h-[4rem] w-[9rem] bg-red-600 rounded-md text-white text-xl font-bold flex items-center justify-center">Start   <AiOutlineLogin size={25} style={{color: "white", marginLeft: "1rem"}}/></button>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
