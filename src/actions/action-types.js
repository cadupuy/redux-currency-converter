import { AMOUNT, CURRENCY, DATE } from "../constants/actions";
// import axios from "axios";

export const setAmount = (payload) => {
  return {
    type: AMOUNT,
    payload,
  };
};

export const setCurrency = (payload) => {
  return {
    type: CURRENCY,
    payload,
  };
};

export const setDate = (payload) => {
  return {
    type: DATE,
    payload,
  };
};

// export const getSymbols = () => {
//   return (dispatch) => {
//     (async () => {
//       try {
// const headers = {
//   "Content-Type": "application/json",
// };
// const { data } = await axios.get(`http://data.fixer.io/api/symbols?access_key=${API_KEY_FIXER}`, headers);
// const { symbols } = data;
// if (success === false) throw new Error("Axios ");
// dispatch({
//   type: INIT_RATES,
//   symbols,
// });
// dispatch(set_isloagingConvert(false));
//       } catch (err) {
//         console.error("Axios getApiFixer :", err);
//       }
//     })();
//   };
// };
