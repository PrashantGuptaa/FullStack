const Counter = ({ counterValue, handleIncrement, index }) => {
    return ( 
        <>
        <h2>Counter: {counterValue}</h2>
        <button onMouseOver={() => handleIncrement(index)}>Increment</button>
        </>
     );
}
 
export default Counter;


