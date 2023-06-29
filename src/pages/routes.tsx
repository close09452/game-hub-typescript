import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../components/GameDetailPage";
import Layout from "./Layout";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;