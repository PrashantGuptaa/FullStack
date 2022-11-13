import { Link, useNavigate } from "react-router-dom";
const NavigationBar = () => {

  const navigate = useNavigate();
  return (
    <>
      <h1>Navigation Bar</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <div onClick={() => navigate('/home')} >Move to Home</div>
        <button onClick={() => navigate('/about')} >Move to About</button>
        <button onClick={() => navigate('/contact')} >Move to Contact</button> */}

      </div>
    </>
  );
};

export default NavigationBar;
