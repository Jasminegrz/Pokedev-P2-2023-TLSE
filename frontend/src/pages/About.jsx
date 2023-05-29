import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import Footer from "../components/Footer";
import PokedevTitle from "../components/PokedevTitle";

function About({ aboutProfiles, getAboutProfiles }) {
  const [count, setCount] = useState(0);
  const breakpoint = () => window.innerWidth >= 600;

  useEffect(() => {
    getAboutProfiles();
  }, [breakpoint]);

  const prevSlide = () => {
    if (count === 0) {
      setCount(aboutProfiles.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const nextSlide = () => {
    if (count === aboutProfiles.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const renderMobile = () => {
    return (
      <div className="containerProfiles">
        <ul className="ul_dataProfilesList" key={aboutProfiles[count].data.id}>
          <div className="borderCardTop" />
          <li className="loginAbout">{aboutProfiles[count].data.login}</li>
          <li className="li_imgAboutProfile">
            <img
              className="imgAboutProfile"
              src={aboutProfiles[count].data.avatar_url}
              alt="Profile"
            />
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Nom d'utilisateur : </span>
            {aboutProfiles[count].data.name}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Lien Github : </span>
            {aboutProfiles[count].data.html_url}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Blog : </span>{" "}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Followers : </span>
            {aboutProfiles[count].data.followers}{" "}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Repositories : </span>
            {aboutProfiles[count].data.public_repos}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Localisation : </span>
            {aboutProfiles[count].data.location || "non renseigné"}
          </li>
          <li className="datasProfile">
            <span className="designationProfiles">Dernière activité : </span>
            {aboutProfiles[count].data.updated_at}
          </li>
        </ul>
        <div className="borderCardBottom" />
      </div>
    );
  };
  function scrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  scrollToTop();
  const renderDesktop = () => {
    return aboutProfiles.map((el) => (
      <ul className="ul_dataProfilesList" key={el.data.id}>
        <div className="borderCardTop" />
        <li>{el.data.login}</li>
        <li className="li_imgAboutProfile">
          <img
            className="imgAboutProfile"
            src={el.data.avatar_url}
            alt="Profile"
          />
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Nom d'utilisateur : </span>
          {el.data.name}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Lien Github : </span>
          {el.data.html_url}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Blog : </span>
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Followers : </span>
          {el.data.followers}{" "}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Repositories : </span>
          {el.data.public_repos}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Localisation : </span>
          {el.data.location || "non renseigné"}
        </li>
        <li className="datasProfile">
          <span className="designationProfiles">Dernière activité : </span>{" "}
          {el.data.updated_at}
        </li>
        <div className="borderCardBottom" />
      </ul>
    ));
  };

  return (
    <div className="mainAbout">
      <div className="p-7 xl:p-0 xl:w-[100dvw]">
        <PokedevTitle />
        {/* <h1 className="xl:ml-20 font-bold bg-gradient-to-b from-indigo-400 to-purple-600 text-transparent bg-clip-text text-5xl xl:m-3 xl:text-left xl:p-5">
          PokeDev
        </h1> */}
        <div className="xl:flex xl:items-center xl:mb-5">
          <div className="xl:bg-gray-300 xl:w-1/2 xl:h-1 ">
            <p className="hidden xl:invisible">Lorem</p>
          </div>
          <div className="mt-5 xl:mt-0 xl:border-4 xl:border-white xl:border-solid xl:rounded-full ">
            <Link to="/pokemain">
              <Button icon="pi pi-home" className="rounded-full block mx-auto">
                <span className="w-full h-full" />
              </Button>
            </Link>
          </div>
          <div className="xl:flex 1" />
          <div className="xl:bg-gray-300 xl:w-1/2 xl:h-1">
            <p className=" hidden xl:invisible">Lorem</p>
          </div>
        </div>
      </div>
      <div className="aboutBox">
        <section>
          <h3 className="h3About">About us...</h3>
          <p className="textAbout">
            If you are looking for expertise or a future collaborator, this site
            is made for you! It will help you find the rare pearl among one of
            the world's largest communities of developers: Github. Its operation
            is based on the principle of the Pokedex, and like its counterpart,
            you will have to use it to search for and find information about
            developers. Once you have found the profiles that suits you, all you
            have to do is contact them at the coordinates indicated on their
            card. The same goes for this text.
            <br />
            This site was developed in the form of a dynamic application using
            'React', a Javascript library for creating a user interface. The
            information obtained on developers was retrieved using the GITHUB
            API. The same goes for this text.
          </p>
        </section>
        <section className="section_dev">
          <h3 className="h3About">The team</h3>
          <p className="textAbout">
            This project was carried out as part of our web developer training
            with the Wild Code School in Toulouse and completed on May 05, 2023.
            Below you will find our own Github profiles and some information
            about our first steps as junior developers.
            <br />
          </p>
          <div className="containerProfilesDeskt">
            {aboutProfiles.length > 0 &&
              (window.innerWidth >= 600 ? renderDesktop() : renderMobile())}
          </div>
          <div className="buttonsAbout">
            <button type="button" className="arrowLeft" onClick={prevSlide}>
              &#10094;
            </button>
            <button type="button" className="arrowRight" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

About.propTypes = {
  aboutProfiles: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  getAboutProfiles: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default About;
