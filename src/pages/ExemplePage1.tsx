import { Link, useNavigate } from "react-router-dom";

const ExemplePage1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ExemplePage1</h1>
      <a href="/example_2">example_2</a>
      <Link to="/example_2">example_2</Link>
      <button onClick={() => navigate("/example_2")}>example_2</button>
    </div>
  );
};

export default ExemplePage1;
