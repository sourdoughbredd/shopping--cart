import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
