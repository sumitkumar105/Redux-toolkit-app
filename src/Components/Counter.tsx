import React from "react";
import { increment, decrement, incrementByAmount } from "../redux/CounterSlice";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <div
        className="bg-white flex justify-center flex-col items-center rounded-md shadow-lg p-3 mx-auto mt-5"
        style={{ width: "50%", height: "300px" }}
      >
        <p className="text-gray text-xl font-bold mb-5">
          Counter:{count > 0 ? count : 0}
        </p>
        <div>
          <button
            onClick={() => dispatch(increment())}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Increment
          </button>

          <button
            onClick={() => count > 0 && dispatch(decrement())}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(2))}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            IncrementByTwo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
