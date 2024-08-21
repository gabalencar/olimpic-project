import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

export default function App(){
  const browserRoute = createBrowserRouter([
    {
      path: "/",
      Component: Home
    }
  ]);

  return <RouterProvider router={browserRoute} />
}