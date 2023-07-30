import React from "react";
import { Navbar } from "./Navbar";
import { ThemeContext } from "../Context/theme";

import "../Styles/Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="nav-link" id='heading'>
            Gaurav.me
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
