import IncrementHoc from "../../containers/IncrementHoc";

const ClickCounter = ({ counter, handleIncrement }) => {
  return (
    <>
      <h2>Click Counter: {counter} </h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

const ClickCounterHoc = IncrementHoc(ClickCounter, 5, 60);

export default ClickCounterHoc;
