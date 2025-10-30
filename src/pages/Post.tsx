import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../utils/api";
import DOMPurify from "dompurify";
import { marked } from "marked";
import Comment from "../components/Comment";

export default function Post() {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let response = await instance.get(`/post/${postId}`);
      const postContent = response.data.data;
      setTitle(postContent.title);
      const html = DOMPurify.sanitize(
        marked.parse(postContent.content, {
          async: false,
        })
      );
      response = await instance.get(`/post/${postId}/comment`);
      const commentContent = response.data.data;
      setCommentData(commentContent);
      setContent(html);
      setLoading(false);
    }
    fetchData();
  }, [postId]);
  return (
    <div className="text-xl font-jbmono flex flex-col h-screen items-center p-4">
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col w-full h-full">
          <div className="flex-1 flex text-4xl justify-center items-center">
            <h1>Post: {postId}</h1>
          </div>
          <div className="flex-5 flex flex-col gap-6">
            <div className="flex gap-3">
              <p>Title: </p>
              <p>{title}</p>
            </div>
            <div>
              <p>Status: Published</p>
            </div>
            <div className="flex flex-col">
              <p>Content: </p>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div>
              <p>Comments: </p>
              <div className="flex flex-col gap-2">
                {commentData.map(({ id, content }) => {
                  return (
                    <Comment
                      content={content}
                      postId={postId}
                      id={id}
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center gap-6">
              <button
                className="border px-4 py-2 cursor-pointer"
                onClick={() => {
                  navigate(`/edit/${postId}`);
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
