import React, { useState } from "react";

const IncrementHoc = (IncrementCounter, incrementValue, intialValue) => {
  const UpdatedComponent = () => {
    const [counter, setCounter] = useState(intialValue);

    const handleIncrement = () => setCounter(counter + incrementValue);

    return (
      <IncrementCounter counter={counter} handleIncrement={handleIncrement} />
    );
  };

  return UpdatedComponent;
};

export default IncrementHoc;
