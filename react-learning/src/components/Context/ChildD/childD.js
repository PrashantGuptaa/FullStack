import { useContext } from "react";
import { Age, FirstName, LastName } from "../../../Context";
/*
const ChildD = () => {
  return (
    <FirstName.Consumer>
      {(fname) => (
        <LastName.Consumer>
          {(lname) => (
            <Age.Consumer>
              {(age) => <h2>{`My name is ${fname} ${lname}, age ${age}`}</h2>}
            </Age.Consumer>
          )}
        </LastName.Consumer>
      )}
    </FirstName.Consumer>
  );
};
*/

const ChildD = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const {age, handleClick} = useContext(Age);

  return (
    <>
      <h2>{`My name is ${fname} ${lname}, age ${age}`}</h2>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default ChildD;
