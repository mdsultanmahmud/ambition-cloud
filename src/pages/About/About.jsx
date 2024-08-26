import "./About.css";
import about__us from "../../assets/about__us.png";
import { MdCall, MdOutgoingMail } from "react-icons/md";
import { FaSkype, FaTelegramPlane } from "react-icons/fa";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ambition__cloud__about__us__container">
      <h3 className="about__us__title">আমাদের সম্পর্কে</h3>
      <div className="about__us__content__container">
        <div className="about__us__info__container">
          <div className="about__us__info__img__container">
            <img src={about__us} alt="about us -- head quarter of the office" />
          </div>
          <div className="about__us__info__text__container">
            <h3>হেড অফিস</h3>
            <p className="info__address">
              ৫ম তলা, বাড়ি ১, <br /> রোড ১৩, সেক্টর ১৩, <br /> গরীব ই নেওয়াজ
              অ্যাভিনিউ, <br /> উত্তরা ঢাকা-১২৩০, বাংলাদেশ
            </p>
            <p className="about__us__info__link">
              <MdCall size={24} />
              <span>০১৫৮৪৭...</span>
            </p>
            <p className="about__us__info__link">
              <MdOutgoingMail size={24} />

              <span>support@ambition-cloud.com</span>
            </p>
            <p className="about__us__info__link">
              <FaSkype size={24} />

              <span>@ambition-cloud</span>
            </p>
            <p className="about__us__info__link">
              <FaTelegramPlane size={24} />
              <span>@ambition-cloud</span>
            </p>
          </div>
        </div>
        <div className="about__us__map__container">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.166771880598!2d90.37787904702067!3d23.763717395657263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f68e3e199%3A0x1091c4aa2634b568!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1723956727997!5m2!1sen!2sbd"
            style={{ border: "0px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9034404654587!2d90.3906371564282!3d23.87325487117207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75f68e3e199%3A0x1091c4aa2634b568!2sYour%20Location!5e0!3m2!1sen!2sbd!4v1723956727997!5m2!1sen!2sbd"
  style={{ border: "0px" }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </div>
    </div>
  );
};

export default About;
