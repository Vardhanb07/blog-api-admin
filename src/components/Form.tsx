import { useNavigate } from "react-router";
import type { FormPropTypes } from "../utils/types";

export default function Form({
  onSubmit,
  setPublished,
  setContent,
  setTitle,
  isPublished,
  textareaValue,
  titleValue,
}: FormPropTypes) {
  const PUBLISHED = "yes",
    NOT_PUBLISHED = "no";
  const navigate = useNavigate();
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col text-xl mb-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border p-3"
          defaultValue={titleValue}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          required
        />
      </div>
      <div className="flex flex-col gap-0.5 text-xl">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          defaultValue={textareaValue}
          rows={10}
          cols={10}
          className="p-3 border"
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          required
        ></textarea>
      </div>
      <div className="mt-3 mb-3 text-xl">
        <fieldset className="border p-2">
          <legend>Is this a draft</legend>
          <div className="flex gap-3">
            <label>
              <input
                type="radio"
                value={PUBLISHED}
                name="published"
                defaultChecked={isPublished}
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
                defaultChecked={!isPublished}
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
      <div className="flex flex-row justify-center items-center gap-3">
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
  );
}
