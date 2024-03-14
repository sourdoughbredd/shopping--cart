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

// App Layout
const Layout = ({ cart, addToCart }) => {
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <Header />
      <Outlet />
    </CartContext.Provider>
  );
};

const App = () => {
  // Cart management
  const [cart, setCart] = useState({});

  // Add to cart using setCart
  const addToCart = (product, quantity) => {
    const id = product.id;
    if (id in cart) {
      const oldQuantity = cart[id].quantity;
      const newCart = {
        ...cart,
        [id]: { ...cart[id], quantity: oldQuantity + quantity },
      };
      setCart(newCart);
      console.log(newCart);
    } else {
      const newCart = { ...cart, [id]: { quantity: quantity, ...product } };
      setCart(newCart);
      console.log(newCart);
    }
  };

  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout {...{ cart, addToCart }} />,
      children: [
        { index: true, element: <Home /> },
        { path: "products/:category", element: <Products /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
