import type { CommentPropTypes } from "../utils/types";
import deleteImg from "../assets/delete.svg";
import instance from "../utils/api";
import { useNavigate } from "react-router";

export default function Comment({ id, content, postId }: CommentPropTypes) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 border p-3">
      <div className="flex flex-row w-full">
        <p className="flex-3">commentId: {id}</p>
        <div
          className="flex-1 flex justify-center items-center cursor-pointer"
          onClick={async () => {
            const token = localStorage.getItem("token");
            await instance.delete(`/post/${postId}/comment/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            navigate(0);
          }}
        >
          <img src={deleteImg} alt="delete" />
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
}
