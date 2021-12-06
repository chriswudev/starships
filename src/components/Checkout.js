import { useState } from 'react';

const COUPON_DISCOUNT = 6.6;
const COUPON = 'PALPATINE';

const Checkout = ({ total }) => {
  const [useCoupon, setUseCoupon] = useState(false);
  const [coupon, setCoupon] = useState('');
  const handleUseCouponClick = (e) => {
    setUseCoupon(e.target.checked);
  };
  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };
  const withCoupon = () => {
    if (useCoupon && coupon === COUPON) {
      return (total * (100 - COUPON_DISCOUNT)) / 100;
    }
    return total;
  };
  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input
              type="checkbox"
              value={useCoupon}
              onChange={handleUseCouponClick}
            />

            <span>Use Coupon?({COUPON_DISCOUNT}% off)</span>
            <input type="text" value={coupon} disabled={!useCoupon} onChange={handleCouponChange} />
          </label>
        </li>

        <li className="collection-item">
          <b>Total: {withCoupon()}</b>
        </li>
      </div>

      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
