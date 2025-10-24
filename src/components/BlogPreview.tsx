import arrowOutwardImg from "../assets/arrow-outward.svg";
import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import type { BlogPreviewPropTypes } from "../utils/types";

export default function BlogPreview({ title }: BlogPreviewPropTypes) {
  return (
    <div className="border p-2 flex flex-row">
      <p className="flex-6">{title}</p>
      <div className="flex-1 flex flex-row">
        <div className="flex-1">
          <img
            src={arrowOutwardImg}
            alt="Open"
            title="Open blog"
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <img
            src={editImg}
            alt="Edit"
            title="Edit blog"
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <img
            src={deleteImg}
            alt="Delete"
            title="Delete blog"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
