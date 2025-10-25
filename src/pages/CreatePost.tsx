import { useState } from "react";
import { useNavigate } from "react-router";
import Editor from "../components/Editor";
import instance from "../utils/api";
import type { CreatePostPropTypes } from "../utils/types";

export default function CreatePost({ token }: CreatePostPropTypes) {
  const [published, setPublished] = useState("no");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const PUBLISHED = "yes",
    NOT_PUBLISHED = "no";

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
              published: published === NOT_PUBLISHED,
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
              <label>
                <input
                  type="radio"
                  value={PUBLISHED}
                  name="published"
                  onClick={(e) => {
                    setPublished(e.currentTarget.value);
                  }}
                  required
                />{" "}
                Yes
              </label>
            </div>
            <div className="flex gap-3">
              <label>
                <input
                  type="radio"
                  value={NOT_PUBLISHED}
                  name="published"
                  defaultChecked={true}
                  onClick={(e) => {
                    setPublished(e.currentTarget.value);
                  }}
                  required
                />{" "}
                No
              </label>
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
