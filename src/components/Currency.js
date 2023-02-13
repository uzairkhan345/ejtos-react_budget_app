import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const myComponentStyle = {
  background: "#d4edda",
  lineHeight: 10,
  width: 50,
  padding: "1.5em",
};

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const handleCurrencyChange = (event) => {
    const { value } = event.target;

    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  return (
    <div className="alert alert-success">
      Currency{"  "}
      <select name="currency" id="curr" onChange={handleCurrencyChange}>
        <option value="£" selected style={myComponentStyle}>
          £ Pound
        </option>
        <option value="$" style={myComponentStyle}>
          $ Dollar
        </option>
        <option value="€" style={myComponentStyle}>
          € Euro
        </option>
        <option value="₹" style={myComponentStyle}>
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Currency;
