import { useNavigate } from "react-router";
import type { NavbarPropTypes } from "../utils/types";

export default function Navbar({ setToken }: NavbarPropTypes) {
  const navigate = useNavigate();
  return (
    <nav className="flex-1">
      <div className="flex flex-row text-3xl p-5 justify-center items-center">
        <h1 className="flex-3 pl-4">Blogs</h1>
        <div className="flex-1 flex justify-center items-center">
          <button
            className="border px-3 py-2 cursor-pointer"
            onClick={() => {
              navigate("/");
              localStorage.removeItem("token");
              setToken(null);
            }}
          >
            Log Out
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <button
            className="border px-3 py-2 cursor-pointer"
            onClick={() => {
              navigate("/post/create");
            }}
          >
            Create Post
          </button>
        </div>
      </div>
    </nav>
  );
}
