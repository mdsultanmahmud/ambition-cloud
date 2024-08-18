import OrderCard from "../OrderCard/OrderCard";
import "./Package.css";
import { FaCheck } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Package = ({ pkg, packageProps }) => {
  // eslint-disable-next-line react/prop-types
  const {
    name,
    img,
    features,
    technology,
    extra_features,
    websites,
    admin_panel_access_info,
    admin_panel_link,
    common,
    customize,
  } = pkg;
  return (
    <div className="ambition__cloud__single__package__container">
      <div className="ambition__cloud__packge__img__section">
        <img className="package__image" src={img} alt="package image" />
        <div className="package__demo__section">
          <p className="demo__link__para">ডেমো লিংক </p>
          <div className="package__demo__link">
            <p className="demo__title">ওয়েবসাইট:</p>
            {
              // eslint-disable-next-line react/prop-types
              websites?.map((web, i) => (
                <div key={i} className="cat__section">
                  <p className="cat__item__btn">{web.category}</p>
                  <a href={web.link} className="cat__link">
                    {web.link}
                  </a>
                </div>
              ))
            }
          </div>
          <div className="package__admin__panel">
            <p className="demo__title">এডমিন প্যানেল:</p>
            <div className="cat__section">
              <p className="cat__item__btn">Link</p>
              <a href={admin_panel_link} className="cat__link">
                {admin_panel_link}
              </a>
            </div>
            {
              // eslint-disable-next-line react/prop-types
              admin_panel_access_info?.map((adp, i) => (
                <div key={i} className="admin__items">
                  <p className="cat__item__btn">{adp.name}</p>
                  <p className="cat__item">Email: {adp.Email}</p>
                  <p className="cat__item">Password: {adp.password}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="ambition__cloud__package__content__section">
        <h3 className="package__name">{name}</h3>
        <div className="package__info">
          <h4>ফিচারঃ</h4>
          <div className="package__features">
            {
              // eslint-disable-next-line react/prop-types
              features.map((ft, i) => (
                <p key={i}>
                  <FaCheck /> <span>{ft}</span>
                </p>
              ))
            }
          </div>
          <h4>প্রযুক্তিঃ</h4>
          <div className="package__technologies">
            {
              // eslint-disable-next-line react/prop-types
              technology.map((tech, i) => (
                <div key={i}>
                  <img src={tech.icon} alt="" />
                  <p>{tech.name}</p>
                </div>
              ))
            }
          </div>
          <div className="order__card__container">
            <OrderCard
              packageProps={packageProps}
              props={common}
              color={"#566573"}
            />
            <OrderCard
              packageProps={packageProps}
              props={customize}
              color={"#f20791"}
            />
          </div>
          <div style={{ margin: "25px 0" }}>
            <p style={{ fontWeight: "600" }}>সাথে আরো যা থাকছে......</p>
            <div className="package__extra__features">
              {
                // eslint-disable-next-line react/prop-types
                extra_features.map((ex_ft, i) => (
                  <p key={i}>
                    <FaCheck /> <span>{ex_ft}</span>
                  </p>
                ))
              }
            </div>
          </div>
          <div className="package__perfect__section">
            <h3>যাদের জন্য উপযুক্তঃ</h3>
            <p>
              <strong>জেনারেল প্যাকেজ:</strong> : নতুন উদ্দোক্তা যাদের বাজেট
              আপাতত কম, যারা বর্তমানে বা ব্যক্তিগতভাবে ই-কমার্স ওয়েবসাইট চালানোর
              ইচ্ছুক, তাদের জন্য।
            </p>
            <p>
              <strong>কর্পোরেট প্যাকেজ:</strong> যারা প্রতিষ্ঠানিকভাবে বড় আকারে
              শুরু করতে চান, তাদের নিজের পছন্দমত কাস্টমাইজ করা যাবে।
            </p>
          </div>
          <p className="package__nb">
            <strong>বিঃ দ্রঃ</strong>শুরুতে সাধারন/ জেনারেল অপশন দিয়ে ওয়েবসাইট
            বানানোর পর, পরবর্তীতে সুবিধাজনক সময়ে প্রয়োজনীয় ফি দিয়ে কাষ্টমাইজ
            করতে পারবেন । এছাড়াও ফ্রি সাপোর্ট এর সময় শেষ হবার পর নির্দিষ্ট ফি
            দিয়ে পেইড সাপোর্ট পাবেন যত দিন ইচ্ছা ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Package;
