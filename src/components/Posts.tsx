import { useEffect, useState } from "react";
import instance from "../utils/api";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await instance.get("/post");
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="flex-5 flex justify-center items-center text-xl">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <p>Posts</p>
        </div>
      )}
    </div>
  );
}
