import OrderCard from "../OrderCard/OrderCard";
import "./Package.css";
import { FaCheck } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Package = ({ pkg }) => {
  // eslint-disable-next-line react/prop-types
  const { name, img, features, technology, extra_features } = pkg;
  console.log(name);
  return (
    <div className="ambition__cloud__single__package__container">
      <div className="ambition__cloud__packge__img__section">
        <img src={img} alt="package image" />
      </div>
      <div className="ambition__cloud__package__content__section">
        <h3 className="package__name">{name}</h3>
        <div className="package__info">
          <h4>িফচারঃ</h4>
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
          <h4>যুিঃ</h4>
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
            <OrderCard/>
            <OrderCard/>
          </div>
          <div>
            <p>সােথ আেরা যা থাকেছ......</p>
            <div className="package__extra__features">
                {
                    // eslint-disable-next-line react/prop-types
                    extra_features.map((ex_ft, i) => <p key={i}>
                    <FaCheck /> <span>{ex_ft}</span>
                  </p>)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
