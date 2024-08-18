import "./Payment.css";
import bkash from "../../assets/bkash.png";
import rocket from "../../assets/rocket.png";
import nagad from "../../assets/nagad.png";
import dbbl from "../../assets/dbbl.png";
import ISB from "../../assets/ISB.png";
import InterB from "../../assets/InterB.png";
import { TbCurrencyTaka } from "react-icons/tb";
import SubmitModal from "../SubmitModal/SubmitModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Payment = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("৩০,০০০");
  const [isAgree, setIsAgree] = useState(false);
  const { selectedPackage, setSelectedPackage, packageType, setPackageType } =
    props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    address: "",
    isRobot: false,
    isAgree: false,
  });
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleOrder = (e) => {
    e.preventDefault();
    toast.success("Your order confirmed!");
    setOpen(true);
    console.log(formData);
  };
  const methods = [
    {
      icon: bkash,
      name: "বিকাশ",
    },
    {
      icon: rocket,
      name: "রকেট",
    },
    {
      icon: nagad,
      name: "নগদ",
    },
    {
      icon: dbbl,
      name: "ডাচ বাংলা ব্যাংক",
    },
    {
      icon: ISB,
      name: "ইসলামী ব্যাংক",
    },
    {
      icon: InterB,
      name: "ইন্টার্ন ব্যাংক",
    },
  ];
  useEffect(() => {
    if (selectedPackage === "package_1") {
      if (packageType === "general") {
        setPrice("৫,০০০");
      } else {
        setPrice("১০,০০০");
      }
    } else if (selectedPackage === "package_2") {
      if (packageType === "general") {
        setPrice("১৫,০০০");
      } else {
        setPrice("৩০,০০০");
      }
    } else {
      if (packageType === "general") {
        setPrice("৫০,০০০");
      } else {
        setPrice("১,২০,০০০");
      }
    }
  }, [selectedPackage, packageType]);
  return (
    <>
      <div id="order__section" className="ambition__cloud__payment__container">
        <div className="payment__method__container">
          <h4 className="payment__method__title">পেমট এর িনয়মঃ</h4>
          <p className="payment__method__desc">
            অডার কনফাম এর সময় ৫০%, সাইট ডিলভারীর সময় বািক ৫০% ।
          </p>
          <div className="payment__method">
            <p className="payment__method__title">পেমট মথডঃ</p>
            <div className="payment__method__item">
              {methods?.map((m, i) => (
                <div key={i}>
                  <img src={m.icon} alt="" />
                  <p>{m.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="payment__method__form__container">
          <p className="payment__method__form__title">অডার কন</p>
          <p className="payment__method__form__desc">
            SAAS - Software As A Service িহসােব একিট মা ওেয়বসাইেট ববহার করেত
            পারেবন । তেব সাস কাড সহ িকনেত চাইেল িনধািরত মুেলর ৫ গূণ অথ পিরেশাধ
            করেত হেব ।
          </p>
          <div className="form__choose__section">
            <p>য পােকজিট িনেত ইুক</p>
            <p>
              <TbCurrencyTaka size={22} />
              <span>{price} টাকা</span>
            </p>
          </div>
          <div className="selected__package">
            <div
              onClick={() => setSelectedPackage("package_1")}
              className={`${selectedPackage === "package_1" && "active"}`}
            >
              <p>পােকজ ১</p>
            </div>
            <div
              onClick={() => setSelectedPackage("package_2")}
              className={`${selectedPackage === "package_2" && "active"}`}
            >
              <p>পােকজ ২</p>
            </div>
            <div
              onClick={() => setSelectedPackage("package_3")}
              className={`${selectedPackage === "package_3" && "active"}`}
            >
              <p>পােকজ ৩</p>
            </div>
          </div>
          <div className="selected__package__items">
            <div
              onClick={() => setPackageType("general")}
              className={`${packageType === "general" && "active"}`}
            >
              <p>সাধারণ</p>
            </div>
            <div
              onClick={() => setPackageType("customize")}
              className={`${packageType === "customize" && "active"}`}
            >
              <p>কামাইজ</p>
            </div>
          </div>

          <form onSubmit={handleOrder} className="payment__form">
            <div className="input__form">
              <label htmlFor="name">নাম</label>
              <input
                onChange={(e) => handleInput(e)}
                id="name"
                name="name"
                required
                type="text"
              />
            </div>

            <div className="input__form">
              <label htmlFor="email">ইেমইলঃ </label>
              <input
                onChange={(e) => handleInput(e)}
                required
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="input__form">
              <label htmlFor="phone">মাবাইল নাারঃ</label>
              <input
                onChange={(e) => handleInput(e)}
                required
                type="text"
                id="phone"
                name="phone"
              />
            </div>
            <div className="input__form">
              <label htmlFor="address">িঠকানাঃ</label>
              <textarea
                onChange={(e) => handleInput(e)}
                className="address"
                required
                type="text"
                id="address"
                name="address"
              />
            </div>
            <div className="input__form">
              <label htmlFor="message">মেসজঃ</label>
              <textarea
                onChange={(e) => handleInput(e)}
                required
                type="text"
                id="message"
                name="message"
              />
            </div>
            <div className="input__form__checkbox">
              <input
                onChange={(e) => handleInput(e)}
                type="checkbox"
                id="isRobot"
                name="isRobot"
              />
              <label htmlFor="isRobot">আিম রাবট নই ।</label>
            </div>
            <div className="input__form__checkbox">
              <input
                onChange={(e) => handleInput(e)}
                type="checkbox"
                id="isAgree"
                name="isAgree"
                onClick={() => setIsAgree(!isAgree)}
              />
              <label htmlFor="isAgree">
                আিম উপেরর শেত রািজ আিছ এবং িবািরত আেলাচনা সােপে ওডার করিছ ।
              </label>
            </div>

            <button type="submit" disabled={!isAgree}>
              অডার কন
            </button>
          </form>
        </div>
      </div>

      <SubmitModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Payment;
