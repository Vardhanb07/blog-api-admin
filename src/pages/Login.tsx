import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import instance from "../utils/api";
import type { LoginPropTypes } from "../utils/types";

export default function Login({ token, setToken }: LoginPropTypes) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  if (token) {
    return <Navigate to="/home" replace />;
  }
  return (
    <div className="flex flex-col h-screen font-jbmono">
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-3xl">Log In</h1>
      </div>
      <div className="flex-8 text-2xl flex justify-center items-center">
        <form
          className="flex flex-col gap-4 border-neutral-500 border p-4 rounded-sm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username">
              Username <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="on"
              className="border border-neutral-500 p-2 rounded-sm"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="on"
              className="border border-neutral-500 p-2 rounded-sm"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            className="rounded-sm border px-4 py-2 border-neutral-500 cursor-pointer"
            onClick={async () => {
              try {
                const response = await instance.post("/login", {
                  username: username,
                  password: password,
                });
                const token: string = response.data.token;
                setError(null);
                setToken(token);
                localStorage.setItem("token", token);
                navigate("/home");
              } catch (err) {
                const message: string = err.response.data.message.message;
                setError(message);
              }
            }}
          >
            Submit
          </button>
          <div>
            <p className="text-xl">
              <span className="text-red-600">*</span> required fields
            </p>
          </div>
          <div>
            <p className="text-red-500 text-xl">{!error ? "" : error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
