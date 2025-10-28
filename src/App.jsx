
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Combine Reducers Example</h1>

      <h2>Count: {count}</h2>
      <h2>User: {name}</h2>

      <div style={{ margin: "20px" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ marginLeft: "10px" }}
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({ type: "SET_NAME", payload: "Mohamed Ashraf" })
          }
          style={{ marginLeft: "10px" }}
        >
          Change Name
        </button>
      </div>
    </div>
  );
}

export default App;
