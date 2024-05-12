import { useState, useEffect } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/CounterSlice";
import { fetchUsers } from "./redux/Prodcuts/ProductSlice";
import Card from "./Components/Card";
function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const productData = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };
    dispatch(fetchUsers());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-cyan-500"
      style={{ minHeight: `${screenHeight}px`, minWidth: `${screenWidth}px` }}
    >
      <h1 className="text-3xl text-center font-bold">Redux toolkit App</h1>
      <div className="container mx-auto mt-3">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cold-2 place-content-center gap-5">
          {productData.status ? (
            <h1>Loading.......</h1>
          ) : (
            <>
              {productData.users.map((product, index) => {
                return <Card product={product} key={index} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
