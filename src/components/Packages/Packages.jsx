import Package from "../Package/Package";
import "./Packages.css";
import packageOne from "../../assets/package--1.png";
import packageTwo from "../../assets/package--2.png";
import packageThree from "../../assets/package--3.png";
import laravel from "../../assets/larav.png";
import vue from "../../assets/vue.png";
import react from "../../assets/react.png";
import { useEffect, useState } from "react";
import convertToBengaliNumber from "../../utils/convertToBengaliNumber ";
// eslint-disable-next-line react/prop-types
const Packages = ({ packageProps }) => {
  const [packageName, setPackageName] = useState("package__0");
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const packages = [
    {
      name: "সুপার ফাস্ট ই-কমার্স ওয়েবসাইট (সিঙ্গেল ভেন্ডর)",
      features: [
        "দৃষ্টিনন্দন ইউজার ইন্টারফেস",
        "সুন্দর অ্যাডমিন প্যানেল",
        "পণ্য (বিবরণ, এসইও, ট্যাগ, অপশন, ইমেজ গ্যালারি, ভিডিও)",
        "পণ্যের বিভিন্নতা ও মূল্য",
        "পণ্য উইশলিস্ট ও রিভিউস",
        "স্মার্ট কার্ট সিস্টেম",
        "সহজ চেকআউট",
        "ই-কমার্স POS",
        "কুপন ও ভাউচার",
        "স্টক ও ইনভেন্টরি ম্যানেজমেন্ট",
        "ইনভয়েচ, অর্ডার ম্যানেজমেন্ট ও ট্র্যাকিং",
        "পুশ নোটিফিকেশন",
        "একাধিক পেমেন্ট গেটওয়ে",
        "একাধিক ভাষা ও বহু মুদ্রা সমর্থন",
        "এবং আরো অনেক কিছু",
      ],
      technology: [
        {
          name: "Laravel",
          icon: laravel,
        },
        {
          name: "VueJS",
          icon: vue,
        },
      ],
      common: {
        price: "৫,০০০",
        state1: "কোড যেমন আছে তেমন ।",
        delivery: "২৪ ঘন্টার মধ্যে",
        support: "৩ দিন",
        type: "সাধারণ",
        name: "package_1",
        type1: "general",
      },
      customize: {
        price: "১০,০০০",
        state1: "নিজের পছন্দমত কাস্টমাইজ করা যাবে",
        delivery: "৩ থেকে ৫ দিন",
        support: "৭ দিন",
        type: "কর্পোরেট",
        name: "package_1",
        type1: "customize",
      },
      extra_features: [
        "৫ জিবি শেয়ার্ড হোষ্টিং ফ্রি ( ১২ মাস)",
        "১ টি ডোমেইন ফ্রি",
        "সার্ভারে ফ্রি সেট আপ ",
      ],
      img: packageOne,
      websites: [
        {
          category: "Fashion",
          link: "https://example.com.bd",
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
      name: "সুপার ফাস্ট ই-কমার্স ওয়েবসাইট (মাল্টি ভেন্ডর)",
      features: [
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
      ],
      technology: [
        {
          name: "Laravel",
          icon: laravel,
        },
        {
          name: "VueJS",
          icon: vue,
        },
      ],
      common: {
        price: "১৫,০০০",
        state1: "কোড যেমন আছে তেমন ।",
        delivery: "৩ দিনের মধ্যে",
        support: "৭ দিন",
        type: "সাধারণ",
        name: "package_2",
        type1: "general",
      },
      customize: {
        price: "৩০,০০০",
        state1: "নিজের পছন্দমত কাস্টমাইজ করা যাবে",
        delivery: "৭ থেকে ১৫ দিন",
        support: "১৫ দিন",
        type: "কর্পোরেট",
        name: "package_2",
        type1: "customize",
      },
      extra_features: [
        "৫ জিবি শেয়ার্ড হোষ্টিং ফ্রি ( ১২ মাস)",
        "১ টি ডোমেইন ফ্রি",
        "সার্ভারে ফ্রি সেট আপ ",
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
      name: "সুপার ফাস্ট ই-কমার্স ওয়েবসাইট",
      features: [
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
        "প্রোডাক্ট লিষ্টিং",
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভয়েস তৈরী",
        "আরো অনেক কিছু...",
      ],
      technology: [
        {
          name: "Laravel",
          icon: laravel,
        },
        {
          name: "ReactJS",
          icon: react,
        },
      ],
      common: {
        price: "৫০,০০০",
        state1: "কোড যেমন আছে তেমন ।",
        delivery: "১৫ দিন",
        support: "১৫  দিন",
        type: "সাধারণ",
        name: "package_3",
        type1: "general",
      },
      customize: {
        price: "১,২০,০০০",
        state1: "নিজের পছন্দমত কাস্টমাইজ করা যাবে",
        delivery: "১ মাস",
        support: "১ মাস",
        type: "কর্পোরেট",
        name: "package_3",
        type1: "customize",
      },
      extra_features: [
        "৪ জিবি র‌্যাম, 2৫ জিবি ভিপিএস হোষ্টিং ফ্রি ( ১২ মাস)",
        "১ টি ডোমেইন ফ্রি",
        "সার্ভারে ফ্রি সেট আপ ",
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

// change the active button when scroll 
  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = packages.map((_, index) => {
        const element = document.getElementById(`package__${index}`);
        if (element) {
          return element.getBoundingClientRect().top;
        }
        return 0;
      });

      const activeIndex = sectionPositions.findIndex(
        (pos) => pos >= 0 && pos <= window.innerHeight / 2
      );

      if (activeIndex !== -1) {
        setPackageName(`package__${activeIndex}`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // section scrolling spacing issue for sticy the button container 
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 200;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="package__section" className="ambition__cloud__package__container">
      <div className="ambition__cloud__package__content">
        {/* package toggle button  */}
        <div className="ambition__cloud__package__toggle__btn">
          <button
            onClick={() => {
              scrollToSection("package__0");
              // setPackageName("package__0");
            }}
            className={`${packageName === "package__0" && "active"}`}
          >
            প্যাকেজ ১
          </button>
          <button
            onClick={() => {
              scrollToSection("package__1");
              // setPackageName("package__1");
            }}
            className={`${packageName === "package__1" && "active"}`}
          >
            প্যাকেজ ২
          </button>
          <button
            onClick={() => {
              scrollToSection("package__2");
              // setPackageName("package__2");
            }}
            className={`${packageName === "package__2" && "active"}`}
          >
            প্যাকেজ ৩
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
                  <h2>প্যাকেজ {convertToBengaliNumber(index + 1)}</h2>
                  <p>Version: 2.0.3</p>
                </div>
                <Package packageProps={packageProps} pkg={pkg} />
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
