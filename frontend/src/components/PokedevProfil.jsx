/* import PropTypes from "prop-types"; */
import React from "react";
import PropTypes from "prop-types";
import "../css/PokedevProfil.css";

function PokedevProfil({
  dataSelected,
  langSelected,
  click,
  count,
  setCount,
  dataTab,
  lang,
  dataGiters,
  setIsVisible,
}) {
  // initialisation des boutons'count'  du pokedev en mobile
  const handleClickPrec = () => {
    setCount(count - 1);
  };
  const handleClickSuiv = () => {
    setCount(count + 1);
  };

  const renderInit = () => {
    return (
      dataGiters && (
        <button type="button" onClick={() => setIsVisible(true)}>
          <ul>
            <li className="PokeAvatar">
              <img src={dataGiters.avatar_url} alt={dataGiters.login} />
            </li>
            <li className="name">{dataGiters.name}</li>
            <li className="login">alias {dataGiters.login}</li>
            <li>
              Lien: <a href="dataGiters.html_url">{dataGiters.html_url}</a>
            </li>
            <li className="followers"> Followers: {dataGiters.followers}</li>
            <li className="languages">
              {lang.map((langGitter) => (
                <li className="langGitter" key={langGitter}>
                  {langGitter}
                </li>
              ))}
            </li>
          </ul>
        </button>
      )
    );
  };
  // initialisation des profils qui seront selectionné (choisis)
  const renderSelected = () => {
    return (
      dataSelected && (
        <button type="button" onClick={() => setIsVisible(true)}>
          <ul className="ProfilSelected">
            <li className="PokeAvatar">
              <img src={dataSelected.avatar_url} alt={dataSelected.login} />
            </li>
            <li className="name">{dataSelected.name}</li>
            <li className="login">alias {dataSelected.login}</li>
            <li className="lien">
              <a href="dataSelected.html_url">{dataSelected.html_url}</a>
            </li>
            <li className="followers">Followers: {dataSelected.followers}</li>
            <li className="languages">
              {langSelected.map((langSelec) => (
                <li className="langGitter" key={langSelec}>
                  {langSelec}
                </li>
              ))}
            </li>
          </ul>
        </button>
      )
    );
  };

  return (
    <div className="PokeProfil">
      <div className="PokedevHeader card-bg-haut bg-cover" />
      {click === true ? renderSelected() : renderInit()}
      <div className="PokedevButtons">
        <button onClick={count > 0 ? handleClickPrec : null} type="button">
          Précédent
        </button>
        <button
          type="button"
          onClick={count < dataTab.length - 1 ? handleClickSuiv : null}
        >
          Suivant
        </button>
      </div>
      <div className="PokedevFooter card-bg-bas bg-cover" />{" "}
    </div>
  );
}

PokedevProfil.propTypes = {
  dataTab: PropTypes.arrayOf(
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
  click: PropTypes.arrayOf(
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
  dataSelected: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  langSelected: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setIsVisible: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default PokedevProfil;
