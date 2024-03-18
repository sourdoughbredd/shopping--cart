import styles from "./QtyControl.module.css";

const QtyControl = ({ quantity, setQuantity }) => {
  return (
    <div className={styles.container}>
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
  );
};

export default QtyControl;
