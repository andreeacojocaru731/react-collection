import { useEffect, useState } from "react";
import Unauthorized from "../../auth/login/unauthorized";

export default function MegaStoreApp() {
  const token = localStorage.getItem("token");

  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discountType, setDiscountType] = useState("standard");

  useEffect(() => {
    console.log(discountType);
    switch (discountType) {
      case "standard":
        if (weight > 0 && price > 0) {
          const discount = price * 0.06;
          setDiscountedPrice(price - discount);
        }
        break;
      case "seasonal":
        if (weight > 0 && price > 0) {
          const discount = price * 0.12;
          setDiscountedPrice(price - discount);
        }
        break;
      case "weight":
        if (weight > 0 && price > 0) {
          if (weight > 20) {
            const discount = price * 0.2;
            setDiscountedPrice(price - discount);
          } else if (weight > 10) {
            const discount = price * 0.1;
            setDiscountedPrice(price - discount);
          } else {
            setDiscountedPrice(price);
          }
        }
        break;
      default:
        console.log("issue");
    }
  }, [discountType, weight, price]);

  return (
    <>
      {token ? (
        <div>
          <label htmlFor="type">Select Type:</label>
          <select
            id="type"
            name="type"
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
          >
            <option value="standard">Standard</option>
            <option value="seasonal">Seasonal</option>
            <option value="weight">Weight</option>
          </select>

          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            step="0.01"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label htmlFor="totalPrice">Total Price ($):</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div>
            Discounted price:<span id="discountedPrice">{discountedPrice}</span>
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
