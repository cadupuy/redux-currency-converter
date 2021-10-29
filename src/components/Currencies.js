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
    <>
      <label>Currency</label>
      <select name="currency" value={currency} onChange={(e) => handleCurrency(e)}>
        {Object.entries(currencies).map((currency, i) => {
          const currencyName = currency[0];
          return (
            <option key={i} value={currency}>
              {currencyName}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Currencies;
