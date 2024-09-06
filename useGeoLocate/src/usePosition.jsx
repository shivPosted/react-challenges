import { useState } from "react";

export default function usePosition() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState("");

  function handlePosition() {
    setIsLoading(true);
    setError("");
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
        setIsLoading(false);
      },
      () => {
        // alert("You did not allowed to access the permission");
        setError("you declined the permissions");
      },
    );
  }
  return { position, isLoading, error, handlePosition };
}
