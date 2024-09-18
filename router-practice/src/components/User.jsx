import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <div className="text-white text-center  bg-orange-200 py-10">User:{id}</div>
  );
}
