import instance from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function Draft() {
  const { draftId } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await instance.get(`/post/${draftId}?published=false`);
      const draftContent = response.data.data;
      setTitle(draftContent.title);
      const html = DOMPurify.sanitize(
        marked.parse(draftContent.content, {
          async: false,
        })
      );
      setContent(html);
      setLoading(false);
    }
    fetchData();
  }, [draftId]);

  return (
    <div className="text-xl font-jbmono flex flex-col h-screen items-center p-4">
      {loading && (
        <div>
          <p>Loading....</p>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col w-full h-full">
          <div className="flex-1 flex text-4xl justify-center items-center">
            <h1>Draft: {draftId}</h1>
          </div>
          <div className="flex-5 flex flex-col gap-6">
            <div className="flex gap-3">
              <p>Title:</p>
              <p>
                <strong>{title}</strong>
              </p>
            </div>
            <div>
              <p>Status: Not published</p>
            </div>
            <div className="flex flex-col">
              <p>Content: </p>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="flex justify-center items-center gap-6">
              <button
                className="border px-4 py-2 cursor-pointer"
                onClick={() => {
                  navigate(`/edit/${draftId}`);
                }}
              >
                Edit
              </button>
              <button
                className="border px-4 py-2 cursor-pointer"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
