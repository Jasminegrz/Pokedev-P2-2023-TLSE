import React from "react";
import PropTypes from "prop-types";

function CardProfil({ dataTabUsers, filteredUser, handleClickProfil }) {
  return filteredUser && filteredUser.length > 0 ? (
    <div>
      <div className="lg:w-[50dvw] lg:flex lg:flex-wrap lg:justify-center lg:gap-5">
        {filteredUser.map((el) => (
          <ul
            className="transition ease-in-out duration-200 shadow-md shadow-gray-300 opacity-70 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 hover:opacity-90 hidden lg:block lg:rounded-xl lg:box-border lg:bg-white lg:text-blue-700 lg:w-[40%] "
            key={el.id}
          >
            {" "}
            <button type="button" onClick={() => handleClickProfil(el)}>
              <div className="hidden lg:block lg:w-[100%] lg:rounded-tl-lg lg:rounded-tr-lg card-bg-haut bg-cover lg:mb-2 ">
                <p className="hidden lg:block lg:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
              <li>
                <img
                  src={el.avatar_url}
                  alt="lorem"
                  className="lg:block lg:mx-auto lg:w-[50%]"
                />
              </li>
              <li>{el.login}</li>
              <li>ID #{el.id}</li>
              <div className="hidden lg:block lg:w-[100%] lg:rounded-bl-lg lg:rounded-br-lg card-bg-bas bg-cover lg:mt-2">
                <p className="hidden lg:block lg:invisible">
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
      <div className="lg:w-[50dvw] lg:flex lg:flex-wrap lg:justify-center lg:gap-5">
        {dataTabUsers.map((element) => (
          <ul
            className="transition ease-in-out duration-200 shadow-md shadow-gray-300 opacity-70 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 hover:opacity-90 hidden lg:block lg:rounded-xl lg:box-border lg:bg-white lg:text-blue-700 lg:w-[40%] "
            key={element.id}
          >
            <button type="button" onClick={() => handleClickProfil(element)}>
              <div className="hidden lg:block lg:w-[100%] lg:h-[50px] lg:rounded-tl-lg lg:rounded-tr-lg card-bg-haut bg-cover lg:mb-2 ">
                <p className="hidden lg:block lg:invisible">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis itaque minus
                </p>
              </div>
              <li>
                <img
                  src={element.avatar_url}
                  alt="lorem"
                  className="lg:block lg:mx-auto lg:w-[50%]"
                />
              </li>
              <li>{element.login}</li>
              <li>ID #{element.id}</li>
              <div className="hidden lg:block lg:w-[100%] lg:h-[50px] lg:rounded-bl-lg lg:rounded-br-lg card-bg-bas bg-cover lg:mt-2">
                <p className="hidden lg:block lg:invisible">
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
