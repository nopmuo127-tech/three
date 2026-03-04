import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="top-center"
        dir="rtl"
        toastOptions={{
          style: {
            fontFamily: 'IBM Plex Sans Arabic, Inter, sans-serif',
          },
        }}
      />
    </>
  );
}
