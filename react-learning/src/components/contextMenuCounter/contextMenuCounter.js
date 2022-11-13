import IncrementHoc from "./../../containers/IncrementHoc";

const ContextMenuCounter = ({ counter, handleIncrement }) => {
  return (
    <>
      <h2>Context Counter: {counter} </h2>
      <button onContextMenu={handleIncrement}>Increment</button>
    </>
  );
};

const ContextMenuCounterHoc = IncrementHoc(ContextMenuCounter, 10, 100);

export default ContextMenuCounterHoc;
