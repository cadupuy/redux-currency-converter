import { AMOUNT, CURRENCY, CURRENCIES, DATE } from "../constants/actions";

const stateInit = {
  amount: 0,
  date: new Date().toISOString().slice(0, 10),
  currency: [],
  currencies: {},
  total: 0,
};

const reducer = (state = stateInit, action = {}) => {
  let { total } = state;

  switch (action.type) {
    case AMOUNT:
      const amount = action.payload;

      if (state.currency) {
        const rate = state.currency[1];
        total = amount * rate;
      }

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

    case CURRENCIES:
      const currencies = action.payload;

      let arr = [...state.currency];
      arr[1] = currencies[state.currency[0]];
      total = state.amount * currencies[state.currency[0]];

      return {
        ...state,
        currencies: currencies,
        currency: [...arr],
        total,
      };

    default:
      return state;
  }
};

export default reducer;
