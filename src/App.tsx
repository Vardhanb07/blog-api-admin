import { Routes, Route, BrowserRouter } from "react-router";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectRoute from "./components/ProtectRoute";
import NoMatch from "./pages/NoMatch";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Draft from "./pages/Draft";
import Edit from "./pages/Edit";

export default function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login token={token} setToken={setToken} />} />
        <Route path="/" element={<Login token={token} setToken={setToken} />} />
        <Route
          path="/home"
          element={
            <ProtectRoute token={token}>
              <Home setToken={setToken} />
            </ProtectRoute>
          }
        />
        <Route
          path="/post/create"
          element={
            <ProtectRoute token={token}>
              <CreatePost />
            </ProtectRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <ProtectRoute token={token}>
              <Post />
            </ProtectRoute>
          }
        />
        <Route
          path="/draft/:draftId"
          element={
            <ProtectRoute token={token}>
              <Draft />
            </ProtectRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectRoute token={token}>
              <Edit />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
