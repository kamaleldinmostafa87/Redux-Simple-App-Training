import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice"; // Import actions directly
import { login } from "./auth";

const Counter = () => {
  const dispatch = useDispatch();
  const glopalState = useSelector((state) => state); // Access counter directly

  return (
    <>
      <button onClick={() => dispatch(login())}>login</button>

      <a href="">sencod push</a>

      {glopalState.value.value ? (
        <>
          <button onClick={() => dispatch(increase())}>
            + increased count is {glopalState.counter.counter}
          </button>

          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <button onClick={() => dispatch(decrease())}> - Decrease</button>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Counter;
