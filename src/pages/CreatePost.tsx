import { useState } from "react";
import { useNavigate } from "react-router";
import instance from "../utils/api";
import Form from "../components/Form";

export default function CreatePost() {
  const [published, setPublished] = useState("no");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const PUBLISHED = "yes";

  const navigate = useNavigate();
  return (
    <div className="font-jbmono m-4">
      <h1 className="flex p-10 justify-center items-center text-2xl">
        Create post
      </h1>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const token = localStorage.getItem("token");
          await instance.post(
            "/post",
            {
              title: title,
              content: content,
              published: published !== PUBLISHED,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          navigate("/home");
        }}
        textareaValue="Use markedjs to write this blog"
        setPublished={setPublished}
        setContent={setContent}
        setTitle={setTitle}
        isPublished={true}
      />
    </div>
  );
}
