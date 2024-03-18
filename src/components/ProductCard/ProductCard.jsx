import styles from "./ProductCard.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../App";
import QtyControl from "../QtyControl/QtyControl";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.addToCartContainer}>
      <QtyControl {...{ quantity, setQuantity }} />
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
