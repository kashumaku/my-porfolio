import { BiMenu, BiSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import "./topBar.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
//rjhfojghdj

const TopBar = () => {
  const [blackTheme, setBlackTheme] = useContext(themeContext);
  return (
    <div className={blackTheme ? "topBar nightMode" : "topBar dayMode"}>
      <span className={blackTheme ? "logo nightMode" : "logo dayMode"}>
        My Portfolio.
      </span>

      <div className="topBarMenu ">
        <a
          className={blackTheme ? "navLink nightMode" : "navLink dayMode"}
          href="#home"
        >
          Home
        </a>
        <a
          className={blackTheme ? "navLink nightMode" : "navLink dayMode"}
          href="#about"
        >
          About
        </a>
        <a
          className={blackTheme ? "navLink nightMode" : "navLink dayMode"}
          href="#works"
        >
          Works
        </a>
        <a
          className={blackTheme ? "navLink nightMode" : "navLink dayMode"}
          href="#services"
        >
          Services
        </a>
        <a
          className={blackTheme ? "navLink nightMode" : "navLink dayMode"}
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div className="smallMenu">
        <BiMenu />
      </div>

      <div className="toggleTheme">
        <span onClick={() => setBlackTheme(!blackTheme)}>
          {" "}
          {blackTheme ? (
            <BiSun className="toggleIcon day" />
          ) : (
            <FaMoon className="toggleIcon" />
          )}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
