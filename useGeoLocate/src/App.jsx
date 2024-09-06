import { useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handlePosition() {
    setIsLoading(true);
    const nav = navigator.geolocation;
    if (!nav) alert("Your browser doesn't support geolocation");

    nav.getCurrentPosition(
      (pos) => {
        console.log(pos);
        const { latitude: lat, longitude: long } = pos.coords;
        setPosition(() => {
          return {
            lat,
            long,
          };
        });
        setCount((cur) => cur + 1);
        setIsLoading(false);
      },
      () => {
        alert("You did not allowed to access the permission");
      },
    );
  }
  return (
    <div className="main">
      <button onClick={handlePosition}>Get Location</button>
      <p>
        {isLoading ? "Loading..." : "Your current position in lat/long is: "}
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
