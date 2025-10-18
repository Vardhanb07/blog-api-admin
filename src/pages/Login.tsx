export default function Login() {
  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white font-jbmono">
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-3xl">Log In</h1>
      </div>
      <div className="flex-6 text-2xl flex justify-center items-center">
        <form action="/api/login" method="post" className="flex flex-col gap-4 border-neutral-500 border p-4 rounded-sm">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="on"
              className="border border-neutral-500 p-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="on"
              className="border border-neutral-500 p-2 rounded-sm"
            />
          </div>
          <button className="rounded-sm border px-4 py-2 border-neutral-500 cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  );
}
