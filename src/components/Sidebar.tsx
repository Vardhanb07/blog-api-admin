export default function Sidebar() {
  return (
    <div className="flex-1 flex flex-row h-full">
      <div className="flex flex-col h-full w-full">
        <div className="cursor-pointer">
          <p className="p-4 text-xl">Drafts</p>
          <hr />
        </div>
        <div className="cursor-pointer">
          <p className="p-4 text-xl">Published</p>
          <hr />
        </div>
      </div>
      <hr className="border h-full" />
    </div>
  );
}
