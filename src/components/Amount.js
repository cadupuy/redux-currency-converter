import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "../actions/action-types";

const Amount = ({ setMessage }) => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state);

  const handleAmount = (e) => {
    if (isNaN(e.target.value)) {
      return setMessage("Veuillez saisir un nombre valide");
    }
    dispatch(setAmount(e.target.value));
  };

  return (
    <>
      <label>Amount</label>
      <input type="number" min="0" name="amount" value={amount} onChange={(e) => handleAmount(e)} />
    </>
  );
};

export default Amount;
