import { useEffect, useState } from "react";
import BlogPreview from "./BlogPreview";
import instance from "../utils/api";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await instance.get("/post?published=true");
      setData(response.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="flex-5 flex text-xl justify-center p-4">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="flex flex-col w-full">
          {data.map(({ id, title }) => {
            return (
              <BlogPreview title={title} published={true} id={id} key={id} />
            );
          })}
        </div>
      )}
    </div>
  );
}
