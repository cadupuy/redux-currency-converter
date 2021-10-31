import { AMOUNT, CURRENCY, CURRENCIES, DATE } from "../constants/actions";
import axios from "axios";

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

export const setCurrencies = (date) => {
  return (dispatch) => {
    (async () => {
      try {
        let apiKey = `http://data.fixer.io/api/${date}?access_key=${process.env.REACT_APP_FIXER_API_KEY}`;
        const response = await axios.get(apiKey);
        dispatch({
          type: CURRENCIES,
          payload: response.data.rates,
        });
        // dispatch(set_isloagingConvert(false));
      } catch (err) {
        console.log(err);
      }
    })();
  };
};
