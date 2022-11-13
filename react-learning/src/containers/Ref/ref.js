import { useRef, useState } from "react";

const RefContainer = () => {
  const myRef = useRef(null);
  const [name, setname] = useState("");
  console.log("Ref", myRef);
  console.log("NAme", name)
  return (
    <form ref={myRef}>
      <input value={name} onChange={(e) => setname(e.target.value)} />
    </form>
  );
};

export default RefContainer;
