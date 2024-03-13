import { useState } from "react";
import styles from "./ProductCard.module.css";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

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
      <button type="button">Add to Cart</button>
    </div>
  );
};

const ProductCard = ({ product, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="Product image" />
      </div>
      <h3>{product.title}</h3>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
