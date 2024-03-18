import styles from "./QtyControl.module.css";

const QtyControl = ({ quantity, setQuantity }) => {
  // Process and validate the quantity input
  const parseInput = (input) => {
    if (input === "") return null;
    const inputInt = parseInt(input);
    if (inputInt < 1) {
      return 1;
    }
    return inputInt;
  };

  // Make sure quantity field isn't empty on focus out
  const onFocusOut = (e) => {
    if (e.target.value === "") {
      e.target.value = 1;
      setQuantity(parseInput(e.target.value));
    }
  };

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
        onBlur={(e) => onFocusOut(e)}
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
