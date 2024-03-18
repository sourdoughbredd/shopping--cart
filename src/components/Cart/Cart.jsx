import { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../App";
import { Close as CloseIcon } from "@mui/icons-material";
import { DeleteOutline as DeleteIcon } from "@mui/icons-material";
import QtyControl from "../QtyControl/QtyControl";
import { USDollar } from "../../utils/formatCurrency";

const CartItem = ({ product, quantity, setQuantity, deleteFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <p className={styles.info}>{product.title}</p>
          <button
            type="button"
            className={styles.buttonWrapper}
            onClick={() => deleteFromCart()}
          >
            <DeleteIcon className={styles.deleteBtn} />
          </button>
        </div>
        <div className={styles.editContainer}>
          <QtyControl {...{ quantity, setQuantity }} />
          <span>{USDollar.format(product.price * quantity)}</span>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const {
    cart,
    showCart,
    toggleCartVisibility,
    updateQuantity,
    deleteFromCart,
  } = useContext(CartContext);

  const classes = styles.cartContainer + (showCart ? " " + styles.hidden : "");

  return (
    <div className={classes}>
      <div className={styles.header}>
        <h3>Cart</h3>
        <button
          type="button"
          className={styles.buttonWrapper}
          onClick={toggleCartVisibility}
        >
          <CloseIcon />
        </button>
      </div>
      <div>
        {Object.keys(cart).map((key) => {
          const item = cart[key];
          return (
            <CartItem
              key={item.product.id}
              {...item}
              setQuantity={(newQty) => updateQuantity(item.product.id, newQty)}
              deleteFromCart={() => deleteFromCart(item.product.id)}
            />
          );
        })}
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.subtotalContainer}>
          <span>Subtotal</span>
          <span>
            {USDollar.format(
              Object.keys(cart).reduce(
                (subtotal, key) =>
                  subtotal + cart[key].product.price * cart[key].quantity,
                0
              )
            )}
          </span>
        </div>
        <button type="button" className={styles.checkoutBtn}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
