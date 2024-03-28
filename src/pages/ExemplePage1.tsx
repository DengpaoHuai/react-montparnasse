import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ExemplePage1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const eventFn = () => {
      console.log("scroll");
    };
    setInterval(() => {
      console.log("setInterval");
    }, 1000);
    const scrollEventListener = addEventListener("scroll", eventFn);
    return () => {
      removeEventListener("scroll", eventFn);
    };
  }, []);

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
