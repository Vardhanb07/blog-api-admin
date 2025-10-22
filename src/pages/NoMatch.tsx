export default function NoMatch() {
  return (
    <div className="bg-neutral-900 h-screen text-white flex flex-col font-jbmono gap-4">
      <h1 className="text-9xl flex-3 flex justify-center items-center">404</h1>
      <div className="flex-4 flex flex-col items-center gap-0.5 text-2xl">
        <p>Error Occured! Page could not be found.</p>
        <p>Please check URL and try again.</p>
      </div>
    </div>
  );
}
