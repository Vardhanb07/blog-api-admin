export default function Navbar() {
  return (
    <nav className="flex-1">
      <div className="flex flex-row text-3xl p-5 justify-center items-center">
        <h1 className="flex-1 pl-4">Blogs</h1>
        <div className="flex-1 flex justify-center items-center">
          <button className="border px-3 py-2 cursor-pointer">Log Out</button>
        </div>
      </div>
    </nav>
  );
}
