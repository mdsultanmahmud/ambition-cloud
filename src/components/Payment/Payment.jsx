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

// eslint-disable-next-line react/prop-types
const Payment = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("৩০,০০০");
  const [isAgree, setIsAgree] = useState(false);
  // eslint-disable-next-line react/prop-types
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
      name: "ইস্টার্ণ ব্যাংক",
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
          <h4 className="payment__method__title">পেমেন্ট এর নিয়মঃ</h4>
          <p className="payment__method__desc">
          অর্ডার কনফার্ম এর সময় ৫০%, সাইট ডেলিভারীর সময় বাকি ৫০% ।
          </p>
          <div className="payment__method">
            <p className="payment__method__title">পেমেন্ট মেথডঃ</p>
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
          <p className="payment__method__form__title">অর্ডার করুন</p>
          <p className="payment__method__form__desc">
          SAAS - Software As A Service হিসাবে একটি মাত্র ওয়েবসাইটে ব্যবহার করতে পারবেন ।
          তবে সোর্স কোড সহ কিনতে চাইলে নির্ধারিত মুল্যের ৫ গূণ অর্থ পরিশোধ করতে হবে ।
          </p>
          <div className="form__choose__section">
            <p>যে প্যাকেজটি নিতে ইচ্ছুক</p>
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
              <p>প্যাকেজ ১</p>
            </div>
            <div
              onClick={() => setSelectedPackage("package_2")}
              className={`${selectedPackage === "package_2" && "active"}`}
            >
              <p>প্যাকেজ ২</p>
            </div>
            <div
              onClick={() => setSelectedPackage("package_3")}
              className={`${selectedPackage === "package_3" && "active"}`}
            >
              <p>প্যাকেজ ৩</p>
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
              <p>কাষ্টমাইজ</p>
            </div>
          </div>

          <form onSubmit={handleOrder} className="payment__form">
            <div className="input__form">
              <label htmlFor="name">নামঃ</label>
              <input
                onChange={(e) => handleInput(e)}
                id="name"
                name="name"
                required
                type="text"
              />
            </div>

            <div className="input__form">
              <label htmlFor="email">ইমেইলঃ  </label>
              <input
                onChange={(e) => handleInput(e)}
                required
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="input__form">
              <label htmlFor="phone">মোবাইল নাম্বারঃ</label>
              <input
                onChange={(e) => handleInput(e)}
                required
                type="text"
                id="phone"
                name="phone"
              />
            </div>
            <div className="input__form">
              <label htmlFor="address">ঠিকানাঃ</label>
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
              <label htmlFor="message">মেসেজঃ </label>
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
              <label htmlFor="isRobot">আমি রোবট নই ।</label>
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
              আমি উপরের শর্তে রাজি আছি এবং বিস্তারিত আলোচনা সাপেক্ষে ওর্ডার করছি ।
              </label>
            </div>

            <button type="submit" disabled={!isAgree}>
            অর্ডার করুন
            </button>
          </form>
        </div>
      </div>

      <SubmitModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Payment;
