import { useContext, useState } from "react";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../App";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // Process and validate the quantity input
  const parseInput = (input) => {
    if (input === "") return null;
    const inputInt = parseInt(input);
    if (inputInt < 1) {
      return 1;
    }
    return inputInt;
  };

  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.quantityGroup}>
        <button
          type="button"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <input
          type="number"
          onChange={(e) => setQuantity(parseInput(e.target.value))}
          value={quantity || ""}
          aria-label="Quantity"
        />
        <button
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button type="button" onClick={() => addToCart(product, quantity)}>
        Add to Cart
      </button>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="Product image" />
      </div>
      <h3>{product.title}</h3>
      <AddToCart {...{ product }} />
    </div>
  );
};

export default ProductCard;
