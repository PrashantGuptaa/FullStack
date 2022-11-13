import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>URL doesn't exist</h1>
      <button onClick={() => navigate("/")}>Landing Page</button>
    </>
  );
};

export default NotFound;
