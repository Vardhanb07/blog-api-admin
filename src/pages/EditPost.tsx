import { useNavigate, useParams } from "react-router";
import Form from "../components/Form";
import instance from "../utils/api";
import { useEffect, useState } from "react";

export default function EditPost() {
  const { id } = useParams();
  const [published, setPublished] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await instance.get(`/post/${id}`);
      const data = response.data.data;
      setTitle(data.title);
      setContent(data.content);
      setPublished(data.published);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className="font-jbmono m-4">
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <div>
          <h1 className="flex p-10 justify-center items-center text-2xl">
            Edit post
          </h1>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              const token = localStorage.getItem("token");
              await instance.put(
                `/post/${id}`,
                {
                  title: title,
                  content: content,
                  published: published,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              navigate("/home");
            }}
            setPublished={setPublished}
            setContent={setContent}
            setTitle={setTitle}
            textareaValue={content}
            publishedValue={published}
            titleValue={title}
          />
        </div>
      )}
    </div>
  );
}
