import "./Contact.css";
import { MdCall, MdOutgoingMail } from "react-icons/md";
import { FaLocationDot, FaSkype } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

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
    console.log("form data is:", formData);
  };

  useEffect(() =>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="ambition__cloud__contact__us__container">
      <div className="ambition__cloud__contact__us__content__container">
        <h3 className="contact__us__title">যোগাযোগ করুন</h3>
        <div className="ambition__cloud__contact__us__content">
          <div className="contact__us__info__container">
            <div className="contact__us__title__description__container">
              {/* <div className="contact__us__vertical__line">
                <p>Contact</p>
              </div> */}
              <div className="contact__us__desc__container">
                <h4>
                  আপনার কোনো প্রশ্ন আছে কি? <br /> অনুগ্রহ করে একটি মেসেজ পাঠান।
                </h4>
                <p>
                  আমাদের সাথে যোগাযোগ করুন এবং জানান কিভাবে আমরা সহায়তা করতে
                  পারি। ফর্মটি পূরণ করুন, যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ
                  করা হবে।
                </p>
              </div>
            </div>
            <div className="contact__us__link__container">
              <h4 className="contact__us__link">
                <FaLocationDot size={24} />
                <span>ঠিকানা:</span>{" "}
              </h4>
              <p className="info__address">
                নিউ ৭ টাওয়ার, লাভ রোড, তেজগাঁও শিল্প এলাকা, ঢাকা - ১২০৮,
                বাংলাদেশ
              </p>
            </div>
            <div className="contact__us__link__container">
              <h4 className="contact__us__link">
                <MdCall size={24} /> <span>মোবাইল নাম্বার:</span>{" "}
              </h4>
              <p>০১৭২৩৩৭..</p>
              <p>০১৭২৩৩৭..</p>
            </div>
            <div className="contact__us__link__container">
              <h4 className="contact__us__link">
                <MdOutgoingMail size={24} />
                <span>ইমেইল:</span>{" "}
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
                <label htmlFor="name">নাম:</label>
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="input__form">
                <label htmlFor="email">ইমেইল:</label>
                <input
                  onChange={(e) => handleInput(e)}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input__form">
                <label htmlFor="phone">মোবাইল নাম্বার:</label>
                <input
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
              <div className="input__form">
                <label htmlFor="message">মেসেজ:</label>
                <textarea
                  onChange={(e) => handleInput(e)}
                  type="text"
                  id="message"
                  name="message"
                  required
                />
              </div>
              <button type="submit">পাঠান</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
