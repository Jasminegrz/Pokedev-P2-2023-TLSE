import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/pokemain") {
    return (
      // <footer className="xl:bg-gradient-to-t bg-gradient-to-b from-blue-200 xl:from-blue-900 backdrop-blur-3xl via-rgba-27-3-199-3615 to-blue-100 opacity-50 xl:opacity-80 xl:text-white text-blue-950 py-4 flex items-center justify-evenly ">
      <footer className="min-h-0 bg-gradient-to-t from-black backdrop-blur-3xl text-white  pb-4 pt-10 flex items-center justify-evenly ">
        <p className="p-3">&copy;WCS Projet 2 - 06 Mai 2023</p>
        <Link to="/about">
          <button type="button" className=" xl:text-white text-xl">
            About us
          </button>
        </Link>
      </footer>
    );
  }

  return (
    <footer className="border-2 border-white border-dashed flex items-center xl:justify-evenly  w-[100dvw] text-white p-5">
      <p>&copy;WCS Projet 2 - 06 Mai 2023</p>
      <div>
        <Link to="/pokemain">
          <button type="button" className="text-xl">
            Main Page
          </button>
        </Link>
      </div>
      <p className="invisible">lorem</p>
    </footer>
  );
}
export default Footer;
