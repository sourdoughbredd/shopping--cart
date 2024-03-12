import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products/:category", element: <Products /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
