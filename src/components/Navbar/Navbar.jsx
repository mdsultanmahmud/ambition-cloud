import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const menu = (
    <>
      <li className="active">পােকজ</li>
      <li className="">শতবলী</li>
      <li>
        <Link to={"/about"}>আমােদর সেক</Link>
      </li>
      <li className="">
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
          <button>অডার কন</button>
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
