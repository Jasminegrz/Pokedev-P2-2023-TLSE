import React from "react";
import PropTypes from "prop-types";

function CardProfil({ dataTabUsers, filteredUser, handleClickProfil }) {
  return filteredUser && filteredUser.length > 0 ? (
    <div>
      <div className="xl:w-[50dvw] xl:flex xl:flex-wrap xl:justify-center xl:gap-5">
        {filteredUser.map((el) => (
          <ul
            className="hidden xl:block xl:rounded-xl xl:box-border xl:bg-white xl:text-blue-700 xl:w-[40%] "
            key={el.id}
          >
            {" "}
            <button type="button" onClick={() => handleClickProfil(el)}>
              <div className="hidden xl:block xl:w-[100%] xl:rounded-tl-lg xl:rounded-tr-lg xl:bg-blue-950 xl:mb-2 ">
                <p className="hidden xl:block xl:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
              <li>
                <img
                  src={el.avatar_url}
                  alt="lorem"
                  className="xl:block xl:mx-auto xl:w-[50%]"
                />
              </li>
              <li>{el.login}</li>
              <li>ID #{el.id}</li>
              <div className="hidden xl:block xl:w-[100%] xl:rounded-bl-lg xl:rounded-br-lg xl:bg-blue-950 xl:mt-2">
                <p className="hidden xl:block xl:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
            </button>
          </ul>
        ))}{" "}
      </div>
    </div>
  ) : (
    <div>
      <div className="xl:w-[50dvw] xl:flex xl:flex-wrap xl:justify-center xl:gap-5">
        {dataTabUsers.map((element) => (
          <ul
            className="transition ease-in-out duration-200 shadow-md shadow-gray-300 opacity-70 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 hover:opacity-90 hidden xl:block xl:rounded-xl xl:box-border xl:bg-white xl:text-blue-700 xl:w-[40%] "
            key={element.id}
          >
            <button type="button" onClick={() => handleClickProfil(element)}>
              <div className="hidden xl:block xl:w-[100%] xl:rounded-tl-lg xl:rounded-tr-lg xl:bg-blue-950 xl:mb-2 ">
                <p className="hidden xl:block xl:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
              <li>
                <img
                  src={element.avatar_url}
                  alt="lorem"
                  className="xl:block xl:mx-auto xl:w-[50%]"
                />
              </li>
              <li>{element.login}</li>
              <li>ID #{element.id}</li>
              <div className="hidden xl:block xl:w-[100%] xl:rounded-bl-lg xl:rounded-br-lg xl:bg-blue-950 xl:mt-2">
                <p className="hidden xl:block xl:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
            </button>
          </ul>
        ))}{" "}
      </div>
    </div>
  );
}
CardProfil.propTypes = {
  dataTabUsers: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  filteredUser: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  handleClickProfil: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
export default CardProfil;
