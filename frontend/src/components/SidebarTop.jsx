import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Sidebar } from "primereact/sidebar";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import lightLogo from "../assets/LogoLight.png";

import SearchBar from "./SearchBar";
import FilterCategory from "./FilterCategory";

import DividerResponsive from "./DividerResponsive";

export default function SideBarTop({
  dataTab,
  url,
  setUrl,
  filteredUrl,
  setFilteredUrl,
  visibleTop,
  setVisibleTop,
}) {
  const [displayLocationValue, setdisplayLocationValue] = useState("");
  const [activeLanguages, setActiveLanguages] = useState([]);

  useEffect(() => {
    if (
      url !== "https://api.github.com/search/users?q=" &&
      filteredUrl !== url
    ) {
      setFilteredUrl(url);
    }
  }, [filteredUrl, url, setUrl]);

  const handleSearch = () => {
    const locationValue = document.getElementById("locationValue");
    if (locationValue && locationValue.innerText.trim() !== "") {
      const newUrl = `${url}location:${locationValue.innerText}`;
      setFilteredUrl(newUrl);
      setUrl("https://api.github.com/search/users?q=");
    }
    setVisibleTop(false);
  };

  const customIcons = (
    <SearchBar
      displayLocationValue={displayLocationValue}
      setdisplayLocationValue={setdisplayLocationValue}
      dataTab={dataTab}
    />
  );

  const handleLogoClick = () => {
    setActiveLanguages([]);
    setUrl("https://api.github.com/search/users?q=");
    setFilteredUrl("https://api.github.com/search/users?q=");
    setVisibleTop(true);
  };

  return (
    <div className="card">
      <div>
        <button
          className="border-white border-4 rounded-full"
          onClick={() => {
            setVisibleTop(true);
            handleLogoClick();
          }}
          type="button"
        >
          <img
            src={lightLogo}
            className="w-[5dvw] transition-all duration-300 hover:w-[7dvw] cursor-pointer"
            alt="logo"
          />
        </button>
      </div>

      <Sidebar
        visible={visibleTop}
        position="top"
        onHide={() => setVisibleTop(false)}
        style={{ height: "80dvh" }}
        icons={customIcons}
      >
        <div className="filter">
          <FilterCategory
            activeLanguages={activeLanguages}
            setActiveLanguages={setActiveLanguages}
            url={url}
            setUrl={setUrl}
          />
          <DividerResponsive />
        </div>
        <div className="desktop">
          <Divider />
        </div>

        <div className="filter">
          <DividerResponsive />
        </div>
        <div className="divButtonSearchSideBar flex justify-between">
          <div className="flex gap-5">
            <div
              id="locationValue"
              className="text-white text-3xl p-5 rounded-xl border-4 border-red-500 border-solid invisible"
            />
          </div>
          <Button
            className="buttonSearchSideBar"
            label="Search"
            type="submit"
            icon="pi pi-check"
            iconPos="right"
            outlined
            size="small"
            onClick={handleSearch}
          />
        </div>
      </Sidebar>
    </div>
  );
}
SideBarTop.propTypes = {
  dataTab: PropTypes.arrayOf(
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
  visibleTop: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setVisibleTop: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};
