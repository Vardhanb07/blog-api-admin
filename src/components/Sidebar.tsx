import type { SidebarPropTypes } from "../utils/types";

export default function Sidebar({ dispatch }: SidebarPropTypes) {
  return (
    <div className="flex-1 flex flex-row h-full">
      <div className="flex flex-col h-full w-full">
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch({ type: "drafts" });
          }}
        >
          <p className="p-4 text-xl">Drafts</p>
          <hr />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch({ type: "posts" });
          }}
        >
          <p className="p-4 text-xl">Published</p>
          <hr />
        </div>
      </div>
      <hr className="border h-full" />
    </div>
  );
}
