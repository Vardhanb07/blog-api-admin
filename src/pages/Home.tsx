import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen font-jbmono">
      <Navbar />
      <hr />
      <div className="flex-8 flex flex-row">
        <Sidebar />
        <Posts />
      </div>
    </div>
  );
}
