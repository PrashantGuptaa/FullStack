import { useState } from "react";

const ControlledAndUnControlledComponent = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    console.log("tARGET: ", e.target);
    const { value } = e.target;
    if (value.length < 8) {
      setMessage("Password length should be greater than 8 characters");
    } else if (value.length > 12) {
      setMessage("Password length should be less than 12 characters");
    } else {
      setMessage("Password looks good");
    }
    setPassword(value);
  };

  const handleSubmit = () => {
    const inputElem = document.getElementById('uncontrolled-input');
    const value = inputElem.value;
    if (value.length < 8) {
        setMessage("Uncontrolled Password length should be greater than 8 characters");
      } else if (value.length > 12) {
        setMessage("Uncontrolled Password length should be less than 12 characters");
      } else {
        setMessage("Uncontrolled Password looks good");
      }
  }

  return (
    <>
      <input id='controlled-input' value={password} onChange={handleClick} />
      <h3>{message} </h3>
      <input id='uncontrolled-input' />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ControlledAndUnControlledComponent;

