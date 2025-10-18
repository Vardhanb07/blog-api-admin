import { createRoot } from "react-dom/client";
import "./globals.css";
import { RouterProvider } from "react-router";
import { router } from "./utils/routes";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
