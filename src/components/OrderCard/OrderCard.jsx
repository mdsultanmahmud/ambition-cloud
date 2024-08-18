import "./OrderCard.css";
// eslint-disable-next-line react/prop-types
const OrderCard = ({ color, props, packageProps }) => {
  // eslint-disable-next-line react/prop-types
  const { price, state1, delivery, support, type, name, type1 } = props;
  // eslint-disable-next-line react/prop-types
  const { setSelectedPackage, setPackageType } = packageProps;
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="single__order__card__container">
      <h4 className="card__header" style={{ backgroundColor: color }}>
        {type} <br /> মূলঃ {price} টাকা
      </h4>
      <div className="card__body" style={{ borderColor: color }}>
        <p>{state1}</p>
        <p>
          সাইট ডিলভারীঃ <span>{delivery}</span>
        </p>
        <p>
          ি সােপাটঃ <span>{support}</span>
        </p>
        <hr />
        <button
          onClick={() => {
            scrollToSection("order__section");
            setSelectedPackage(name);
            setPackageType(type1);
          }}
          style={{ borderColor: color }}
        >
          অডার কন
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
