import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.github.com/users/shivPosted");
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        const data = await res.json();

        const { name, followers, avatar_url: img, repos_url: repos } = data;
        setData({ name, followers, img, repos });
      } catch (err) {
        alert(err.message);
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="text-gray-600 text-center  bg-orange-200 py-10 flex-col ">
      <h3>
        {data?.name}: Followers:{data?.followers}
      </h3>
      <img
        src={data?.img}
        alt={`${data?.name}-image`}
        className="size-80 ml-10"
      />
      <h2>
        <a href={data.repos}>Github Repo</a>
      </h2>
    </div>
  );
}
