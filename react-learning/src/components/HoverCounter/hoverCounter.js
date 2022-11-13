import IncrementHoc from "./../../containers/IncrementHoc";

const HoverCounter = ({ counter, handleIncrement }) => {
  return (
    <>
      <h2 onMouseOver={handleIncrement}>Hover Counter: {counter} </h2>
    </>
  );
};

const HoverCounterHoc = IncrementHoc(HoverCounter, 15, 20);

export default HoverCounterHoc;
