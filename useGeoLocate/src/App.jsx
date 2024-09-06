import { useEffect, useState } from "react";
import usePosition from "./usePosition";

function App() {
  const [count, setCount] = useState(0);
  const { position, isLoading, error, handlePosition } = usePosition();

  useEffect(() => {
    if (position.lat || position.long) setCount((cur) => cur + 1);
  }, [position]);

  return (
    <div className="main">
      <button onClick={handlePosition}>Get Location</button>
      <p>
        {error
          ? error
          : isLoading
            ? "Loading..."
            : "Your current position in lat/long is: "}
        {}
        <a
          href={`https://www.openstreetmap.org/#map=19/${position.lat}/${position.long}`}
        >
          {position.lat} {position.long}
        </a>
      </p>
      <p>You requested the location {count} times</p>
    </div>
  );
}

export default App;
