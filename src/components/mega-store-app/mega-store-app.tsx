import { useCallback, useEffect, useState } from "react";
import Unauthorized from "../../auth/login/unauthorized";

import cx from "classnames";
import Style from "./mega-store-app.module.scss";
import { useTranslation } from "react-i18next";
import Lesson from "../../common-components/lesson/lesson";

export default function MegaStoreApp() {
  const token = localStorage.getItem("token");
  const { t } = useTranslation("common");

  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [discountType, setDiscountType] = useState("standard");

  const calculateDiscountedPrice = useCallback(
    (price: number, discount: number) => {
      return price - price * discount;
    },
    [weight, price],
  );

  useEffect(() => {
    switch (discountType) {
      case "standard":
        setDiscountedPrice(calculateDiscountedPrice(price, 0.06));
        break;
      case "seasonal":
        setDiscountedPrice(calculateDiscountedPrice(price, 0.12));
        break;
      case "weight":
        if (weight > 10) {
          setDiscountedPrice(calculateDiscountedPrice(price, 0.18));
        } else {
          setDiscountedPrice(calculateDiscountedPrice(price, 0.06));
        }

        break;
      default:
        console.log("issue");
    }
  }, [discountType, weight, price]);

  const handleOnChangeWeight = (e) => setWeight(e.target.value);
  const handleOnChangePrice = (e) => setPrice(e.target.value);
  const handleOnChangeSelectType = (e) => {
    setDiscountType(e.target.value);
  };

  const text: string[] = [
    t("megaStoreAppQuestionLine1"),
    t("megaStoreAppQuestionLine2"),
    t("megaStoreAppQuestionLine3"),
    t("megaStoreAppQuestionLine4"),
    t("megaStoreAppQuestionLine5"),
    t("megaStoreAppQuestionLine6"),
  ];
  return (
    <>
      {token ? (
        <Lesson title={"Mega Store App"} text={text}>
          <div className={cx(Style.solution)}>
            <label htmlFor="type">Select Type:</label>
            <select
              id="type"
              name="type"
              value={discountType}
              onChange={handleOnChangeSelectType}
              className={cx(Style.input)}
            >
              <option value="standard">Standard</option>
              <option value="seasonal">Seasonal</option>
              <option value="weight">Weight</option>
            </select>

            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              min="0"
              id="weight"
              name="weight"
              step="0.01"
              value={weight}
              onChange={handleOnChangeWeight}
              className={cx(Style.input)}
            />

            <label htmlFor="totalPrice">Total Price ($):</label>
            <input
              type="number"
              min="0"
              id="totalPrice"
              name="totalPrice"
              step="0.01"
              value={price}
              onChange={handleOnChangePrice}
              className={cx(Style.input)}
            />

            <div>
              Discounted price:
              <span id="discountedPrice">{discountedPrice}</span>
            </div>
          </div>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
