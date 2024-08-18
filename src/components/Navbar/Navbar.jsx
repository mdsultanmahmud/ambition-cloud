import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const location = useLocation();
  const [section, setSection] = useState();
  const [showNav, setShowNav] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menu = (
    <>
      <li
        onClick={() => {
          scrollToSection("package__section");
          setSection("package__section");
        }}
        className={`${
          section === "package__section" &&
          location.pathname === "/" &&
          "active"
        }`}
      >
        পােকজ
      </li>
      <li
        onClick={() => {
          scrollToSection("condition_section");
          setSection("condition_section");
        }}
        className={`${
          section === "condition_section" &&
          location.pathname === "/" &&
          "active"
        }`}
      >
        শতবলী
      </li>
      <li className={`${location.pathname === "/about" && "active"}`}>
        <Link to={"/about"}>আমােদর সেক</Link>
      </li>
      <li className={`${location.pathname === "/contact" && "active"}`}>
        <Link to={"/contact"}>যাগােযাগ</Link>
      </li>
    </>
  );
  return (
    <div className="ambition__cloud__navbar__container">
      <div className="ambition__cloud__navbar__lg">
        <div className="ambition__cloud__navbar__logo">
          <Link to={"/"}>Ambition Cloud</Link>
        </div>
        <ul className="ambition__cloud__navbar__menu">{menu}</ul>
        <div className="ambition__cloud__navbar__button">
          <button onClick={() => scrollToSection("order__section")}>
            অডার কন
          </button>
          <div className="ambition__cloud__navbar__toggle">
            {!showNav ? (
              <FaBars onClick={() => setShowNav(true)} />
            ) : (
              <ImCross onClick={() => setShowNav(false)} />
            )}
          </div>
        </div>
      </div>
      <div className={`ambition__cloud__navbar__sm ${showNav ? "active" : ""}`}>
        <ul className="ambition__cloud__navbar__menu__sm">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
