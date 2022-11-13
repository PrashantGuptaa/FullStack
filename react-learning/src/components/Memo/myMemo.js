import { memo, useEffect } from "react";

const MyMemo = (props) => {
  useEffect(() => {
    console.log("Component Rendered - UseEffect");
  }, [props.handleDecrement]);
  return (
    <>
      <button onClick={props.handleDecrement}>Decrement</button>
    </>
  );
};

const MemoizedComponent = memo(MyMemo);

export default MemoizedComponent;
