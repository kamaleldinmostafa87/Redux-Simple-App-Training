import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice"; // Import actions directly
import { login } from "./auth";
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
      <button onClick={() => dispatch(login())}>login</button>

      {glopalState.value.value ? (
        <>
          <button onClick={() => dispatch(increase())}>
            + increased count is {glopalState.counter.counter}
          </button>

          <p>
            Edit <code>src/App.jsx</code> and save to test HMR I added new yes
          </p>
          <button onClick={() => dispatch(decrease())}> - Decrease</button>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more yessss
          </p>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Counter;
