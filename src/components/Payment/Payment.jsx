import "./Payment.css";
import bkash from "../../assets/bkash.png";
import rocket from "../../assets/rocket.png";
import nagad from "../../assets/nagad.png";
import dbbl from "../../assets/dbbl.png";
import ISB from "../../assets/ISB.png";
import InterB from "../../assets/InterB.png";
import { TbCurrencyTaka } from "react-icons/tb";

const Payment = () => {
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
  return (
    <div className="ambition__cloud__payment__container">
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
            <span>৩০,০০০ টাকা</span>
          </p>
        </div>
        <div className="selected__package">
          <div>
            <p>পােকজ ১</p>
          </div>
          <div className="active">
            <p>পােকজ ২</p>
          </div>
          <div>
            <p>পােকজ ৩</p>
          </div>
        </div>
        <div className="selected__package__items">
          <div className="active">
            <p>সাধারণ</p>
          </div>
          <div>
            <p>কামাইজ</p>
          </div>
        </div>

        <form className="payment__form">
          <div className="input__form">
            <label htmlFor="name">নাম</label>
            <input id="name" name="name" type="text" />
          </div>

          <div className="input__form">
            <label htmlFor="email">ইেমইলঃ </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input__form">
            <label htmlFor="phone">মাবাইল নাারঃ</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="input__form">
            <label htmlFor="address">িঠকানাঃ</label>
            <textarea className="address" type="text" id="address" name="address" />
          </div>
          <div className="input__form">
            <label htmlFor="message">মেসজঃ</label>
            <textarea type="text" id="message" name="message" />
          </div>
          <div className="input__form__checkbox">
            <input type="checkbox" id="isRobot" name="isRobot"/>
            <label htmlFor="isRobot" >আিম রাবট নই ।</label>
          </div>
          <div className="input__form__checkbox">
            <input type="checkbox" id="isAgree" name="isAgree"/>
            <label htmlFor="isAgree">আিম উপেরর শেত রািজ আিছ এবং িবািরত আেলাচনা সােপে ওডার করিছ ।</label>
          </div>

          <button>অডার কন</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
