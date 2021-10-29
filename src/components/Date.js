import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../actions/action-types";

const Date = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state) => state);

  const handleChangeDate = (e) => {
    dispatch(setDate(e.target.value));
  };

  return (
    <>
      <label>Date</label>
      <input
        type="date"
        required
        onKeyDown={(e) => e.preventDefault()}
        value={date}
        onChange={(e) => handleChangeDate(e)}
      />
    </>
  );
};

export default Date;
