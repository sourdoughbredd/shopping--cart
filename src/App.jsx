import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
});

const App = () => {
  // Cart management
  const [cart, setCart] = useState({});

  const addToCart = (product, quantity) => {
    const id = product.id;
    console.log(product);
    if (id in cart) {
      const oldQuantity = cart[id].quantity;
      const newCart = {
        ...cart,
        [id]: { ...cart[id], quantity: oldQuantity + quantity },
      };
      setCart(newCart);
    } else {
      const newCart = { ...cart, [id]: { quantity: quantity, ...product } };
      setCart(newCart);
    }
  };

  // App Layout and Router
  const Layout = () => {
    return (
      <CartContext.Provider value={{ cart, addToCart }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
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

  return <RouterProvider router={router} />;
};

export default App;
