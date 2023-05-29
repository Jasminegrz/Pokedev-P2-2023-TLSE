import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/pokemain") {
    return (
      <footer className="mt-10 min-h-0 bg-gradient-to-t from-black backdrop-blur-3xl text-white  pb-4 pt-10 flex items-center justify-evenly ">
        <p className="p-3">&copy;WCS Projet 2 - 06 Mai 2023</p>
        <Link to="/about">
          <button
            type="button"
            className="lg:text-white text-xl hover:scale-125 duration-300"
          >
            About us
          </button>
        </Link>
      </footer>
    );
  }

  return (
    <footer className="border-2 border-white border-dashed flex items-center lg:justify-evenly  w-[100dvw] text-white p-5">
      <p>&copy;WCS Projet 2 - 06 Mai 2023</p>
      <div>
        <Link to="/pokemain">
          <button
            type="button"
            className="text-xl hover:scale-125 duration-300"
          >
            Main Page
          </button>
        </Link>
      </div>
      <p className="invisible">lorem</p>
    </footer>
  );
}
export default Footer;
