// Header.jsx
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavLinks = () => (
  <nav className={styles.flexItem}>
    <ul className={styles.linksList}>
      <li>
        <Link to="products/men's clothing">Men&apos;s Clothing</Link>
      </li>
      <li>
        <Link to="products/women's clothing">Women&apos;s Clothing</Link>
      </li>
      <li>
        <Link to="products/jewelery">Jewelry</Link>
      </li>
      <li>
        <Link to="products/electronics">Electronics</Link>
      </li>
    </ul>
  </nav>
);

const Search = () => {
  const searchBtnClicked = (e) => {
    const btn = e.target.closest("button");
    const input = btn.parentElement.querySelector("input");
    input.classList.toggle(styles.inputActive);
    // Hide from accessibilty tree when not active
    if (input.classList.contains(styles.inputActive)) {
      input.removeAttribute("aria-hidden");
    } else {
      input.setAttribute("aria-hidden", "true");
    }
  };

  return (
    <form className={styles.searchForm}>
      <button
        type="button"
        className={styles.button}
        onClick={searchBtnClicked}
        aria-label="Search"
      >
        <SearchIcon></SearchIcon>
      </button>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        aria-label="Search through products"
      />
    </form>
  );
};

const CartButton = () => {
  const cartBtnClicked = () => {};

  return (
    <button
      className={styles.button}
      onClick={cartBtnClicked}
      aria-label="Cart"
    >
      <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
    </button>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Stuff</h1>
      </Link>
      <NavLinks></NavLinks>
      <div className={styles.buttonGroup}>
        <Search></Search>
        <CartButton></CartButton>
      </div>
    </header>
  );
};

export default Header;
