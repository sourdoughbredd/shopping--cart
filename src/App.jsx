import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

export const CartContext = createContext({
  cart: [],
  showCart: false,
  toggleCartVisibility: () => {},
  addToCart: () => {},
  updateQuantity: () => {},
  deleteFromCart: () => {},
});

// App Layout
const Layout = ({
  cart,
  showCart,
  toggleCartVisibility,
  addToCart,
  updateQuantity,
  deleteFromCart,
}) => {
  return (
    <CartContext.Provider
      value={{
        cart,
        showCart,
        toggleCartVisibility,
        addToCart,
        updateQuantity,
        deleteFromCart,
      }}
    >
      <Header />
      <div id="app-main-content-container">
        <Cart />
        <Outlet />
      </div>
    </CartContext.Provider>
  );
};

const App = () => {
  // Cart management
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(true);

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  // Add items to cart
  const addToCart = (product, quantity) => {
    const id = product.id;
    if (id in cart) {
      const oldQuantity = cart[id].quantity;
      const newCart = {
        ...cart,
        [id]: { ...cart[id], quantity: oldQuantity + quantity },
      };
      setCart(newCart);
    } else {
      const newCart = { ...cart, [id]: { quantity: quantity, product } };
      setCart(newCart);
    }
  };

  // Update cart item with new quantity
  const updateQuantity = (id, newQuantity) => {
    if (id in cart) {
      const newCart = {
        ...cart,
        [id]: { ...cart[id], quantity: newQuantity },
      };
      setCart(newCart);
      console.log(newCart);
    } else {
      console.log("Tried to update a cart product that's not in the cart!");
    }
  };

  // Delete item from cart
  const deleteFromCart = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };

  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          {...{
            cart,
            showCart,
            toggleCartVisibility,
            addToCart,
            updateQuantity,
            deleteFromCart,
          }}
        />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "products/:category", element: <Products /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
