import "./OrderCard.css";
const OrderCard = () => {
  return (
    <div className="single__order__card__container">
      <h4 className="card__header">
        সাধারন <br /> মূলঃ ৫০, ০০০ টাকা
      </h4>
      <div className="card__body">
        <p>কাড যমন আেছ তমন</p>
        <p>
          সাইট ডিলভারীঃ <span>১৫ িদন</span>
        </p>
        <p>
          ি সােপাটঃ <span>১৫ িদন</span>
        </p>
        <hr />
      <button>অডার কন</button>
      </div>
    </div>
  );
};

export default OrderCard;
