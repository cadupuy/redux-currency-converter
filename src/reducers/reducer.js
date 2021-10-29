import { AMOUNT, CURRENCY, DATE } from "../constants/actions";

const stateInit = {
  amount: 0,
  date: new Date().toISOString().slice(0, 10),
  currency: "AED",
  total: 0,
};

const reducer = (state = stateInit, action = {}) => {
  let { total } = state;

  switch (action.type) {
    case AMOUNT:
      const amount = action.payload;
      const rate = state.currency[1];
      total = amount * rate;

      return {
        ...state,
        amount,
        total,
      };

    case DATE:
      const date = action.payload;

      return {
        ...state,
        date,
      };

    case CURRENCY:
      const currency = action.payload;
      total = state.amount * currency[1];

      return {
        ...state,
        currency: [...currency],
        total,
      };

    default:
      return state;
  }
};

export default reducer;
