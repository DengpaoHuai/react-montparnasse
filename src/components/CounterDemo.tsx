import { MouseEvent, useState } from "react";

const CounterDemo = () => {
  let count = 0;
  const [counter, setCounter] = useState(0);
  console.log(counter);
  console.log("render");

  return (
    <div>
      <p>ma valeur : {counter}</p>
      <p>Count: {count}</p>

      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Increment let
      </button>

      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Increment useState
      </button>
    </div>
  );
};

export default CounterDemo;
