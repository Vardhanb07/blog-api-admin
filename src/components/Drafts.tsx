import { useEffect, useState } from "react";
import BlogPreview from "./BlogPreview";
import instance from "../utils/api";

export default function Drafts() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    const fetechData = async () => {
      setLoading(true);
      const response = await instance.get("/post?published=false");
      setData(response.data.data);
      setLoading(false);
    };
    fetechData();
  }, [refresh]);
  return (
    <div className="flex-5 flex text-xl justify-center p-4">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="flex flex-col w-full">
          {data.map(({ id, title }) => {
            return (
              <BlogPreview title={title} published={false} id={id} refresh={refresh} setRefresh={setRefresh} key={id} />
            );
          })}
        </div>
      )}
    </div>
  );
}
