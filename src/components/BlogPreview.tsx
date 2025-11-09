import arrowOutwardImg from "../assets/arrow-outward.svg";
import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import { useNavigate } from "react-router";
import type { BlogPreviewPropTypes } from "../utils/types";
import instance from "../utils/api";

export default function BlogPreview({
  id,
  title,
  published,
  refresh,
  setRefresh,
}: BlogPreviewPropTypes) {
  const navigate = useNavigate();
  return (
    <div className="border p-2 flex flex-row mb-3">
      <p className="flex-6">{title}</p>
      <div className="flex-1 flex flex-row">
        <div className="flex-1">
          <img
            src={arrowOutwardImg}
            alt="Open"
            title="Open blog"
            className="cursor-pointer"
            onClick={() => {
              if (published) {
                navigate(`/post/${id}`);
              } else {
                navigate(`/draft/${id}`);
              }
            }}
          />
        </div>
        <div className="flex-1">
          <img
            src={editImg}
            alt="Edit"
            title="Edit blog"
            className="cursor-pointer"
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          />
        </div>
        <div className="flex-1">
          <img
            src={deleteImg}
            alt="Delete"
            title="Delete blog"
            className="cursor-pointer"
            onClick={async () => {
              const token = localStorage.getItem("token");
              await instance.delete(`/post/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              if (refresh) {
                setRefresh(false);
              } else {
                setRefresh(true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
