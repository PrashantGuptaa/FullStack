import { useState, useEffect } from "react";

const LifeCycleFunctional = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    console.log("Use Effect-1 Called !!");
    return () => {
        console.log("Return of Use-Effect-1");
    }
  }, [counter]);
  // Dependency Array

//   useEffect(() => {
//     console.log("Use effect-2 Called");
//   }, [counter2]);

  return (
    <>
      <h1>Counter-1: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <h1>Counter-2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 5)}>Decrement</button>
    </>
  );
};

export default LifeCycleFunctional;
