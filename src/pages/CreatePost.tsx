import { useState } from "react";
import { useNavigate } from "react-router";
import Editor from "../components/Editor";
import instance from "../utils/api";
import type { CreatePostPropTypes } from "../utils/types";

export default function CreatePost({ token }: CreatePostPropTypes) {
  const [published, setPublished] = useState("no");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  return (
    <div className="font-jbmono m-4">
      <h1 className="flex p-10 justify-center items-center text-2xl">
        Create post
      </h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await instance.post(
            "/post",
            {
              title: title,
              content: content,
              published: published === "yes" ? true : false,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          navigate("/home");
        }}
      >
        <div className="flex flex-col text-xl mb-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border p-3"
            required
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xl">Content</p>
          <Editor setContent={setContent} />
        </div>
        <div className="mt-3 mb-3 text-xl">
          <fieldset className="border p-2">
            <legend>Is this a draft?</legend>
            <div className="flex gap-3">
              <input
                type="radio"
                value="yes"
                name="published"
                checked={published === "yes"}
                onChange={(e) => {
                  setPublished(e.currentTarget.value);
                }}
                required
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-3">
              <input
                type="radio"
                value="no"
                name="published"
                checked={published === "no"}
                onChange={(e) => {
                  setPublished(e.currentTarget.value);
                }}
                required
              />
              <label htmlFor="no">No</label>
            </div>
          </fieldset>
        </div>
        <div className="flex flex-row justify-center items-center  gap-3">
          <button
            className="px-4 py-2 border text-xl cursor-pointer"
            onClick={() => {
              navigate("/home");
            }}
          >
            Go Back
          </button>
          <button className="px-4 py-2 border text-xl cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
