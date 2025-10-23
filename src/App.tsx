import { Routes, Route, BrowserRouter } from "react-router";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectRoute from "./components/ProtectRoute";
import NoMatch from "./pages/NoMatch";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";

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
              <Home />
            </ProtectRoute>
          }
        />
        <Route path="/post">
          <Route
            index
            element={
              <ProtectRoute token={token}>
                <Posts />
              </ProtectRoute>
            }
          />
          <Route
            path="create"
            element={
              <ProtectRoute token={token}>
                <CreatePost />
              </ProtectRoute>
            }
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}
