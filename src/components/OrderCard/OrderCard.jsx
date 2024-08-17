import "./OrderCard.css";
const OrderCard = ({color}) => {
  return (
    <div className="single__order__card__container">
      <h4 className="card__header" style={{backgroundColor: color}}>
        সাধারন <br /> মূলঃ ৫০, ০০০ টাকা
      </h4>
      <div className="card__body" style={{borderColor: color}}>
        <p>কাড যমন আেছ তমন</p>
        <p>
          সাইট ডিলভারীঃ <span>১৫ িদন</span>
        </p>
        <p>
          ি সােপাটঃ <span>১৫ িদন</span>
        </p>
        <hr />
      <button style={{borderColor: color}}>অডার কন</button>
      </div>
    </div>
  );
};

export default OrderCard;
