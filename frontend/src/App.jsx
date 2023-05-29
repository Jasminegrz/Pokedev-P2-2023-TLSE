import "./css/App.css";
import "./css/About.css";
import "./css/SideBarTop.css";
import "./css/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
// theme
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import "primeicons/primeicons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemain from "./pages/Pokemain";
import About from "./pages/About";

function App() {
  // Création des variables à remplir
  const [dataTab, setDataTab] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [dataRepos, setDataRepos] = useState([]);
  const [lang, setLang] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataGiters, setDataGiters] = useState([]);
  const [aboutProfiles, setAboutProfiles] = useState([]);
  const developpers = ["Jasminegrz", "jeromev81600", "M3DxM3D", "Othmandn"];
  const [url, setUrl] = useState("https://api.github.com/search/users?q=");
  const [filteredUrl, setFilteredUrl] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

  useEffect(() => {
    if (filteredUrl) {
      axios
        .get(filteredUrl)
        .then((response) => {
          setFilteredUser(response.data.items);
        })
        .catch((error) => {
          console.error(error.message);
        });
    } else {
      axios
        .get("https://api.github.com/users")
        .then((response) => {
          setDataTab(response.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [filteredUrl, url]);
  // 1e Fetch pour récupérer l'intégralité des données des users remplir un tableau dataTab avec

  // on récupére les langages de l'endpoint repos

  // 2e Fetch pour obtenir les infos pour remplir la petite card
  useEffect(() => {
    if (filteredUser.length) {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${filteredUser[count].login}`)
        .then((response) => {
          setDataGiters(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
    } else if (dataTab.length) {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${dataTab[count].login}`)
        .then((response) => {
          setDataGiters(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
    }
  }, [filteredUser, dataTab, count, setLoading]);

  // 3e Fecth pour récupérer les infos pour remplir la modal

  useEffect(() => {
    if (filteredUser.length) {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${filteredUser[count].login}/repos`)
        .then((response) => {
          setDataGiters(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
    } else if (dataTab.length) {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${dataTab[count].login}/repos`)
        .then((response) => {
          setDataRepos(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
    }
  }, [filteredUser, dataTab, count, setLoading]);

  // on récupére les langages de l'endpoint repos
  useEffect(() => {
    const langSet = new Set();
    for (const repo of dataRepos) {
      if (repo.language) {
        langSet.add(repo.language);
      }
    }
    setLang(Array.from(langSet));
  }, [dataRepos]);

  // Fetch pour section 'ABOUT US'  //
  const getAboutProfiles = async () => {
    try {
      const promises = developpers.map((developper) =>
        axios.get(`https://api.github.com/users/${developper}`)
      );
      const PromiseAboutProfiles = await Promise.all(promises);
      setAboutProfiles(PromiseAboutProfiles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pokemain"
            element={
              <Pokemain
                dataTab={dataTab}
                dataRepos={dataRepos}
                lang={lang}
                count={count}
                setCount={setCount}
                dataGiters={dataGiters}
                startIndex={startIndex}
                setStartIndex={setStartIndex}
                loading={loading}
                url={url}
                setUrl={setUrl}
                filteredUser={filteredUser}
                filteredUrl={filteredUrl}
                setFilteredUrl={setFilteredUrl}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                aboutProfiles={aboutProfiles}
                getAboutProfiles={getAboutProfiles}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
