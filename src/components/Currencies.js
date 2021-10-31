import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../actions/action-types";

const Currencies = ({ currencies }) => {
  const dispatch = useDispatch();
  const { currency } = useSelector((state) => state);

  const handleCurrency = (e) => {
    dispatch(setCurrency(e.target.value.split(",")));
  };

  return (
    <div>
      <label>Currency</label>

      {console.log(currency)}
      <select name="currency" value={currency} onChange={(e) => handleCurrency(e)}>
        <option value={null}>-</option>
        {Object.entries(currencies).map((currency, i) => {
          const currencyName = currency[0];

          return (
            <option key={i} value={currency}>
              {currencyName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Currencies;
