import classnames from "https://cdn.skypack.dev/classnames";
import isMobile from "https://cdn.skypack.dev/ismobilejs";
import { useState } from "react";
import "./ConnectWhatsapp.css";
import { ImWhatsapp } from "react-icons/im";
import person from "../../assets/wt__lg.png";
import whatsApp from '../../assets/whatsapp.jpg'
import cross from '../../assets/cross.png'
function contactMe() {
  const buildUrl = (message) => {
    const system = isMobile().phone ? "api" : "web";
    const number = "1778807299";
    const url = `https://${system}.whatsapp.com/send?phone=+880${number}&text=${message}`;
    return url;
  };

  const msg = encodeURI("আমি আপনার সাথে যোগাযোগ করতে চাই");
  const href = buildUrl(msg);
  window.open(href);
}

const ConnectWhatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperClassnames = classnames("chat-wrapper", { open: isVisible });
//   const badgeClassnames = classnames("badge", { open: isVisible });
  const icon1Classnames = classnames("icon1", { open: isVisible });
  const icon2Classnames = classnames("icon2", { open: isVisible });
  const mnButnClassnames = classnames("main-button", { open: isVisible });

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={wrapperClassnames}>
        <div className="header">
          <div className="content-wrapper">
            <div className="img-wrapper">
              <img className="person-image" src={person} />
            </div>
            <h3>Ambition Cloud</h3>
          </div>
        </div>
        <div className="center">
          <div className="message">
            <div className="title">Ambition Cloud</div>
            <div className="message-content">
              স্বাগতম 👋 <br />
              <br />
              কিভাবে আপনাকে সহযোগিতা করতে পারি?
            </div>
          </div>
        </div>
        <div className="footer-wts">
          <div
            className="wts-button"
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
            onClick={contactMe}
          >
            <ImWhatsapp size={18} className="icon" />
            Start Chat
          </div>
        </div>
      </div>

      <button className={mnButnClassnames} onClick={toggle}>
        <img
          className={icon1Classnames}
          src={whatsApp}
        />
        <img
          className={icon2Classnames}
          src={cross}
          // src="https://firebasestorage.googleapis.com/v0/b/codepen-13ec9.appspot.com/o/close-white.svg?alt=media&token=c036208a-7c9b-49c2-8ea5-a21a0bae2d13"
        />
      </button>
    </>
  );
};

export default ConnectWhatsapp;
