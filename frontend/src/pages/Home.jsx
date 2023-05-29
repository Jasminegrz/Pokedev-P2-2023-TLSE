import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import text from "./auto-text.json";
import logolight from "../assets/LogoLight.png";
import arrow from "../assets/arrow.svg";
import PokedevTitle from "../components/PokedevTitle";

function ModalHome() {
  const [generatedText, setGeneratedText] = useState("");
  // const [generatedCta, setGeneratedCta] = useState("");
  const [firstIntervalDone, setFirstIntervalDone] = useState(false);

  const description = text.text1;
  // const cta = text.text2;

  useEffect(() => {
    const timer = setInterval(() => {
      setGeneratedText(
        (prevText) => prevText + description.charAt(prevText.length)
      );
    }, 15);
    if (generatedText.length === description.length) {
      setFirstIntervalDone(true);
    }
    // if (firstIntervalDone) {
    //   const ctaTimer = setInterval(() => {
    //     setGeneratedCta((prevText) => prevText);
    //   }, 30);
    //   // + cta.charAt(prevText.length)
    //   return () => clearInterval(ctaTimer);
    // }

    return () => clearInterval(timer);
  }, [description, generatedText, firstIntervalDone]);
  // cta,
  return (
    <div className="bg-black h-[100dvh] w-[100dvw]">
      <div className="py-10 w-full bg-black flex flex-col flex-wrap items-center">
        <PokedevTitle />
        <div
          className="text-base leading-10 p-10 w-[100dvw]

        lg:text-xl  lg:leading-10 lg:p-10 lg:mx-auto lg:w-1/2 lg:flex lg:flex-col"
        >
          {/* <h1
            className="text-4xl mb-3 bg-gradient-to-r from-indigo-800 to-purple-500 text-transparent bg-clip-text
          
          xl:mb-6"
          >
            PokeDev
          </h1> */}

          <p className="text-white text-left">{generatedText}</p>
          {/* <p className="text-white mt-5 lg:mt-9">{generatedCta}</p> */}
        </div>
        <div className=" flex flex-col items-center">
          <div className=" animateMove">
            <p className="text-white text-xl m-5 lg:mt-9">Click me</p>
            <img
              className="fleche block"
              // className={`fleche ${
              //   generatedCta.length === cta.length ? "block" : "hidden"
              // }`}
              src={arrow}
              alt="flèche"
            />
          </div>
          <Link className="logoShadow" to="/pokemain">
            <img
              src={logolight}
              alt="logo"
              className="w-[25dvw] lg:w-[10dvw] blg:mt-1 block"
              // className={`mt-2 xl:mt-1 w-[20dvw] xl:w-[10dvw] ${
              //   generatedCta.length === cta.length ? "block" : "hidden"
              // }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalHome;
