import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import VideoFeed from "./components/VideoFeed";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children : [
        {
          index: true,
          element: <VideoFeed/>
        },
        
      ]
    }
  ])
  return <RouterProvider router={router} />;
}


