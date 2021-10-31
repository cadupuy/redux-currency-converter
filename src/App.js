import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrencies } from "./actions/action-types";

// Components
import Currencies from "./components/Currencies";
import Amount from "./components/Amount";
import Date from "./components/Date";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { amount, total, currency, currencies, date } = useSelector((state) => state);

  useEffect(() => {
    setIsLoading(true);
    dispatch(setCurrencies(date));

    setIsLoading(false);
  }, []);

  return isLoading ? (
    "CHARGEMENT "
  ) : (
    <div className="App">
      <div>Convertisseur de devise</div>

      <Amount setMessage={setMessage} />
      <Date />
      <Currencies currencies={currencies} />

      {amount && currency && total ? (
        <p className="total">
          Amount : {amount} EUR to {total.toFixed(2)} {currency[0]} Currency date : {date}
        </p>
      ) : (
        " "
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
