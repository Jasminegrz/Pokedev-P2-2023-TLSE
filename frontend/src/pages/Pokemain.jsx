import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.css";
import axios from "axios";
import SideBarTop from "../components/SidebarTop";
import CardProfil from "../components/CardProfil";
import PokedevProfil from "../components/PokedevProfil";
import loadingImg from "../assets/loadingImg.gif";
import ModalProfile from "../components/ModalProfile";
import "../css/CardProfil.css";
import "../css/ModalProfile.css";
import Footer from "../components/Footer";
import darkLogo from "../assets/LogoDark.png";
import leftArrow from "../assets/arrow-left-test.svg";
import rightArrow from "../assets/arrow-right-test.svg";

// dataTabUser est une fonction qui retourne un tableau d'objet avec les infos des users 6 par 6
// qui est passé en props au composant CardProfil, il est le résultat de l'appel API sur le endpoint user

export default function Pokemain({
  dataTab,
  count,
  setCount,
  dataRepos,
  lang,
  dataGiters,
  startIndex,
  loading,
  setStartIndex,
  url,
  setUrl,
  filteredUser,
  filteredUrl,
  setFilteredUrl,
}) {
  const [selected, setSelected] = useState([]);
  const [dataSelected, setDataSelected] = useState([]);
  const [dataRepoSelected, setDataRepoSelected] = useState([]);
  const [langSelected, setLangSelected] = useState([]);
  const [click, setClick] = useState(false);
  const [visibleTop, setVisibleTop] = useState(false);

  const handleClickProfil = (el) => {
    setSelected(el);
    setClick(true);
  };

  const [isVisible, setIsVisible] = useState(false);
  const nextCards = () => {
    if (startIndex + 6 < dataTab.length) {
      setStartIndex(startIndex + 6);
    }
  };
  // Création du bouton "précédent" pour faire apparaitre 4 profils et faire disparaitre ceux actuels
  const prevCards = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    }
  };

  // Création d'un bouton random pour faire apparaitre 4 profils au hasard
  const randomCards = () => {
    const randomStartIndex = Math.floor(Math.random() * (dataTab.length - 6));
    setStartIndex(randomStartIndex);
  };

  // sélection de 6 profil parmi la liste des données retournées
  const getCurrentCards = () => {
    return dataTab.slice(startIndex, startIndex + 6);
  };
  const getCurrentFilter = () => {
    return filteredUser.slice(startIndex, startIndex + 6);
  };
  // Fetchs correspondant au profil sélectionné (au click)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${selected.login}`)
      .then((response) => {
        setDataSelected(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [selected]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${dataSelected.login}/repos`)
      .then((response) => {
        setDataRepoSelected(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [dataSelected]);

  // on récupére les langages de l'endpoint repos
  useEffect(() => {
    const langSet = new Set();
    for (const repoSelected of dataRepoSelected) {
      if (repoSelected.language) {
        langSet.add(repoSelected.language);
      }
    }
    setLangSelected(Array.from(langSet));
  }, [dataRepoSelected]);

  function scrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  scrollToTop();
  return (
    <div
      className={`h-[auto] w-[100dvw] bg-gradient-to-b from-black via-blue-950 to-indigo-950 backdrop-blur-3xl  xl:pokemain-bg bg-cover bg-center relative ${
        isVisible ? "backdrop-filter backdrop-blur-lg" : ""
      }`}
    >
      {loading ? (
        <img src={loadingImg} alt="Loading..." />
      ) : (
        <div>
          {isVisible && (
            <ModalProfile
              dataRepoSelected={dataRepoSelected}
              dataSelected={dataSelected}
              langSelected={langSelected}
              click={click}
              setIsVisible={setIsVisible}
              dataRepos={dataRepos}
              dataTab={dataTab}
              lang={lang}
              dataGiters={dataGiters}
            />
          )}
        </div>
      )}
      <div className={(isVisible || visibleTop) && "contentModal"}>
        <div className="p-7 xl:p-0 xl:w-[100dvw]">
          {/* <h1 className="font-bold bg-gradient-to-b from-blue-400 to-purple-600 text-transparent bg-clip-text text-5xl xl:text-left xl:p-5"> */}
          <h1 className="pokedevTextShadow font-bold text-5xl xl:text-left xl:p-5">
            PokeDev
          </h1>
          <div className="flex items-center mb-5 mt-10 ">
            <div className="bg-gray-300 w-1/2 h-1 xl:bg-gray-300 xl:w-1/2 xl:h-1 ">
              <p className="invisible">Lorem</p>
            </div>

            <div className="xl:flex 1">
              <SideBarTop
                url={url}
                setUrl={setUrl}
                dataTab={dataTab}
                filteredUrl={filteredUrl}
                setFilteredUrl={setFilteredUrl}
                visibleTop={visibleTop}
                setVisibleTop={setVisibleTop}
              />
            </div>
            <div className="bg-gray-300 w-1/2 h-1 xl:bg-gray-300 xl:w-1/2 xl:h-1">
              <p className="invisible">Lorem</p>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-wrap xl:w-[100dvw]">
          <div className=" xl:w-[100%] xl:flex">
            <div>
              {getCurrentCards().length ? (
                <CardProfil
                  dataTabUsers={getCurrentCards()}
                  handleClickProfil={handleClickProfil}
                  dataGiters={dataGiters}
                  filteredUser={getCurrentFilter()}
                />
              ) : (
                <div className=" xl:h-[auto] xl:w-[100%] m-20 ">
                  <img src="src/assets/404.png" alt="erreur 404" />{" "}
                </div>
              )}
            </div>
            <div className="w-[100%] flex flex-col justify-center items-center ">
              <div className="p-4 w-[100%] xl:w-[50%] xl:h-[70%] h-[50vh]text-black">
                <PokedevProfil
                  dataSelected={dataSelected}
                  langSelected={langSelected}
                  click={click}
                  count={count}
                  setCount={setCount}
                  dataRepos={dataRepos}
                  dataTab={dataTab}
                  lang={lang}
                  dataGiters={dataGiters}
                  setIsVisible={setIsVisible}
                />

                <div className="flex justify-center gap-7 p-3 ">
                  <button onClick={prevCards} type="button" className="hidden">
                    <img
                      src={leftArrow}
                      alt="arrow"
                      className="cursor-pointer w-[3.5dvw]"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={randomCards}
                    className="hidden"
                  >
                    <img src="./src/assets/random-btn.png" alt="random-btn" />
                  </button>
                  <button className="hidden" onClick={nextCards} type="button">
                    <img
                      src={rightArrow}
                      alt="arrow"
                      className="cursor-pointer w-[3.5dvw]"
                    />
                  </button>
                </div>
              </div>
              <div className="hidden xl:flex xl:mt-5 xl:w-[17dvw] xl:justify-between  xl:p-3">
                <button type="button" onClick={prevCards}>
                  <img
                    src={leftArrow}
                    alt="arrow"
                    className="xl:cursor-pointer xl:w-[3.5dvw]"
                  />
                </button>

                <button type="button" onClick={randomCards} className="">
                  <img src="./src/assets/random-btn.png" alt="random-btn" />
                </button>
                <button onClick={nextCards} type="button">
                  <img
                    src={rightArrow}
                    alt="arrow"
                    className="xl:cursor-pointer xl:w-[3.5dvw]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="flex m-5 justify-center xl:hidden">
          <img src={darkLogo} className="w-[39dvw] cursor-pointer" alt="logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

Pokemain.propTypes = {
  dataTab: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  dataRepos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  lang: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  dataGiters: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setCount: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  count: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  url: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setUrl: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  filteredUser: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  filteredUrl: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setFilteredUrl: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  startIndex: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  setStartIndex: PropTypes.number.isRequired,
};
