import { StrictMode } from "react";
import { router } from "./Routes/Route.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider.jsx";

import ShoopProvider from "./Providers/ShoopProvider/ShoopProvider.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ShoopProvider>
          <RouterProvider router={router} />
        </ShoopProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
