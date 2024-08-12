import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export function App() {
  return (
    <div className="bg-slate-950 h-svh text-white">
      <RouterProvider router={router} />
    </div>
  );
}
