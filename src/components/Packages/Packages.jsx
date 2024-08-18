import Package from "../Package/Package";
import "./Packages.css";
import packageOne from "../../assets/package--1.png";
import packageTwo from "../../assets/package--2.png";
import packageThree from "../../assets/package--3.png";
import laravel from "../../assets/larav.png";
import vue from "../../assets/vue.png";
import react from "../../assets/react.png";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Packages = ({ packageProps }) => {
  const [packageName, setPackageName] = useState("package__0");
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const packages = [
    {
      name: "পার ফা ই-কমাস ওেয়বসাইট (Single Vendor)",
      features: [
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
      ],
      technology: [
        {
          name: "Laravel MVC",
          icon: laravel,
        },
      ],
      common: {
        price: "৫,০০০",
        state1: "কাড যমন আেছ তমন",
        delivery: " ২৪ ঘটার মেধ",
        support: "৩ িদন",
        type: "সাধারণ",
        name:"package_1", 
        type1:"general"
      },
      customize: {
        price: "১০,০০০",
        state1: "িনেজর পছমত কামাইজ করা যােব",
        delivery: " ৩ থেক ৫ িদন",
        support: "7  িদন",
        type: "কাস্টমাইজ",
         name:"package_1", 
        type1:"customize"
      },
      extra_features: [
        "৫ িজিব শয়াড হািং ি ( ১২ মাস)",
        "১ িট ডােমইন ি",
        "সাভাের ি সট আপ",
      ],
      img: packageOne,
      websites: [
        {
          category: "Fashion",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Electronics",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Books",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Groceries",
          link: "https://demo1.example.com.bd",
        },
      ],
      admin_panel_link: "https://demo1.example.com.bd/admin",
      admin_panel_access_info: [
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "Admin",
        },
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "User",
        },
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "Vendor",
        },
      ],
    },
    {
      name: "পার ফা ই-কমাস ওেয়বসাইট (Multi Vendor)",
      features: [
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
      ],
      technology: [
        {
          name: "Laravel MVC",
          icon: laravel,
        },
        {
          name: "VueJS",
          icon: vue,
        },
      ],
      common: {
        price: "১৫,০০০",
        state1: "কাড যমন আেছ তমন",
        delivery: " ২৪ ঘটার মেধ",
        support: "৩ িদন",
        type: "সাধারণ",
         name:"package_2", 
        type1:"general"
      },
      customize: {
        price: "৩০,০০০",
        state1: "িনেজর পছমত কামাইজ করা যােব",
        delivery: " ৩ থেক ৫ িদন",
        support: "7  িদন",
        type: "কাস্টমাইজ",
         name:"package_2", 
        type1:"customize"
      },
      extra_features: [
        "৫ িজিব শয়াড হািং ি ( ১২ মাস)",
        "১ িট ডােমইন ি",
        "সাভাের ি সট আপ",
      ],
      img: packageTwo,
      websites: [
        {
          category: "Fashion",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Electronics",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Books",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Groceries",
          link: "https://demo1.example.com.bd",
        },
      ],
      admin_panel_link: "https://demo1.example.com.bd/admin",
      admin_panel_access_info: [
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "Admin",
        },
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "User",
        },
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "Vendor",
        },
      ],
    },
    {
      name: "পার ফা ই-কমাস ওেয়বসাইট",
      features: [
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
        "াডা িলিং",
        "াডা িলিং",
        "অডার মােনজেমট",
        "ইনভেয়স তরী",
      ],
      technology: [
        {
          name: "Laravel MVC",
          icon: laravel,
        },
        {
          name: "ReactJS",
          icon: react,
        },
      ],
      common: {
        price: "5000",
        state1: "কাড যমন আেছ তমন",
        delivery: " ২৪ ঘটার মেধ",
        support: "৩ িদন",
        type: "সাধারণ",
         name:"package_3", 
        type1:"general"
      },
      customize: {
        price: "10000",
        state1: "িনেজর পছমত কামাইজ করা যােব",
        delivery: " ৩ থেক ৫ িদন",
        support: "7  িদন",
        type: "কাস্টমাইজ",
         name:"package_3", 
        type1:"customize"
      },
      extra_features: [
        "৫ িজিব শয়াড হািং ি ( ১২ মাস)",
        "১ িট ডােমইন ি",
        "সাভাের ি সট আপ",
      ],
      img: packageThree,
      websites: [
        {
          category: "Fashion",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Electronics",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Books",
          link: "https://demo1.example.com.bd",
        },
        {
          category: "Groceries",
          link: "https://demo1.example.com.bd",
        },
      ],
      admin_panel_link: "https://demo1.example.com.bd/admin",
      admin_panel_access_info: [
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "Admin",
        },
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "User",
        },
        {
          Email: "admin@gmail.com",
          password: "123456",
          name: "Vendor",
        },
      ],
    },
  ];
  return (
    <div id="package__section" className="ambition__cloud__package__container">
      <div className="ambition__cloud__package__content">
        {/* package toggle button  */}
        <div className="ambition__cloud__package__toggle__btn">
          <button
            onClick={() => {
              scrollToSection("package__0");
              setPackageName("package__0");
            }}
            className={`${packageName === "package__0" && "active"}`}
          >
            পােকজ ১
          </button>
          <button
            onClick={() => {
              scrollToSection("package__1");
              setPackageName("package__1");
            }}
            className={`${packageName === "package__1" && "active"}`}
          >
            পােকজ ২
          </button>
          <button
            onClick={() => {
              scrollToSection("package__2");
              setPackageName("package__2");
            }}
            className={`${packageName === "package__2" && "active"}`}
          >
            পােকজ ৩
          </button>
        </div>
        <div>
          {/* all packages here  */}
          <div className="ambition__cloud__packages">
            {packages.map((pkg, index) => (
              <div
                id={`package__${index}`}
                key={index}
                className="ambition__cloud__package"
              >
                <div className="ambition__cloud__package__name__section">
                  <h2>Package {index + 1}</h2>
                  <p>Version: 2.0.3</p>
                </div>
                <Package packageProps = {packageProps} pkg={pkg} />
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
