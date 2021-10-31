import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setDate, setCurrencies } from "../actions/action-types";

const Date = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state) => state);

  const handleChangeDate = (e) => {
    dispatch(setDate(e.target.value));
    dispatch(setCurrencies(e.target.value));
  };

  return (
    <div>
      <label>Date</label>
      <input
        type="date"
        required
        onKeyDown={(e) => e.preventDefault()}
        value={date}
        onChange={(e) => handleChangeDate(e)}
      />
    </div>
  );
};

export default Date;
