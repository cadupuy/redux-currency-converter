import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setCurrency } from "./actions/action-types";

// Components
import Currencies from "./components/Currencies";
import Amount from "./components/Amount";
import Date from "./components/Date";

import "./App.css";

function App() {
  // const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { amount, total, currency, date } = useSelector((state) => state);

  useEffect(() => {
    let apiKey = `http://data.fixer.io/api/${date}?access_key=${process.env.REACT_APP_FIXER_API_KEY}`;

    const getMachin = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(apiKey);
        setCurrencies(response.data.rates);
        // dispatch(setCurrency(response.data.rates[0]));
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    getMachin();
  }, [date]);

  return isLoading ? (
    "CHARGEMENT "
  ) : (
    <div className="App">
      <div>EURO Currency CONVERTER</div>

      <Amount setMessage={setMessage} />

      <Date />
      <Currencies currencies={currencies} />

      {amount && currency && total ? (
        <p>
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
