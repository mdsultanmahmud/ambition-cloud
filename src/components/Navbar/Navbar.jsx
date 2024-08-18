import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [section, setSection] = useState(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      setSection(location.state.scrollTo);
    }
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
      setSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const menu = (
    <>
      <li className={`${location.pathname === "/" && !section && "active"}`}>
        <Link to="/">হোম</Link>
      </li>
      <li
        onClick={() => handleSectionClick("package__section")}
        className={`${
          section === "package__section" &&
          location.pathname === "/" &&
          "active"
        }`}
      >
        প্যাকেজ
      </li>
      <li
        onClick={() => handleSectionClick("condition_section")}
        className={`${
          section === "condition_section" &&
          location.pathname === "/" &&
          "active"
        }`}
      >
        শর্তাবলী
      </li>
      <li className={`${location.pathname === "/about" && "active"}`}>
        <Link to="/about">আমাদের সম্পর্কে</Link>
      </li>
      <li className={`${location.pathname === "/contact" && "active"}`}>
        <Link to="/contact">যোগাযোগ</Link>
      </li>
    </>
  );

  return (
    <div className="ambition__cloud__navbar__container">
      <div className="ambition__cloud__navbar__lg">
        <div className="ambition__cloud__navbar__logo">
          <Link to="/">Ambition Cloud</Link>
        </div>
        <ul className="ambition__cloud__navbar__menu">{menu}</ul>
        <div className="ambition__cloud__navbar__button">
          <button onClick={() => handleSectionClick("order__section")}>
            অর্ডার করুন
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
