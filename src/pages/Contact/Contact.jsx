import "./Contact.css";
import { MdCall, MdOutgoingMail } from "react-icons/md";
import { FaLocationDot, FaSkype } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Your message submitted!");
    console.log("form data is:",formData);
  };
  return (
    <div className="ambition__cloud__contact__us__container">
      <div className="ambition__cloud__contact__us__content__container">
        <h3 className="contact__us__title">Contact Us</h3>
        <div className="ambition__cloud__contact__us__content">
          <div className="contact__us__info__container">
            <div className="contact__us__title__description__container">
              {/* <div className="contact__us__vertical__line">
                <p>Contact</p>
              </div> */}
              <div className="contact__us__desc__container">
                <h4>
                  Have you any query ? <br /> please drop a message
                </h4>
                <p>
                  Get in touch and let me know how I can help. Fill out the form
                  and I'll be in touch as soon as possible.
                </p>
              </div>
            </div>
            <div className="contact__us__link__container">
              <h4 className="contact__us__link">
                <FaLocationDot size={24} />
                <span>Address:</span>{" "}
              </h4>
              <p className="info__address">
                New 7 Towers, Love Road, Tejgoan I/A, Dhaka - 1208, Bangladesh
              </p>
            </div>
            <div className="contact__us__link__container">
              <h4 className="contact__us__link">
                <MdCall size={24} /> <span>Phone:</span>{" "}
              </h4>
              <p>+8801581192171</p>
              <p>+8801581192171</p>
            </div>
            <div className="contact__us__link__container">
              <h4 className="contact__us__link">
                <MdOutgoingMail size={24} />
                <span>Email:</span>{" "}
              </h4>
              <p>info@example.com</p>
              <p>support@example.com</p>
            </div>
            <div className="contact__us__icons__container">
              <FaFacebook className="icon" />
              <FaSkype className="icon" />
              <FaTelegramPlane className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="contact__us__form__container">
            <form onSubmit={handleForm} className="contact__us__form">
              <div className="input__form">
                <label htmlFor="name">Name</label>
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="input__form">
                <label htmlFor="email">email</label>
                <input
                  onChange={(e) => handleInput(e)}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input__form">
                <label htmlFor="phone">phone(Option)</label>
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="input__form">
                <label htmlFor="message">message</label>
                <textarea
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="message"
                  name="message"
                  required
                />
              </div>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
