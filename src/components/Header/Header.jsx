// Header.jsx
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavLinks = () => (
  <nav className={styles.flexItem}>
    <ul className={styles.linksList}>
      <li>
        <a href="">Men's Clothing</a>
      </li>
      <li>
        <a href="">Women's Clothing</a>
      </li>
      <li>
        <a href="">Jewelry</a>
      </li>
      <li>
        <a href="">Electronics</a>
      </li>
    </ul>
  </nav>
);

const Search = () => (
  <button className={styles.button} aria-label="Search">
    <div className={styles.searchContainer}>
      <SearchIcon></SearchIcon>
    </div>
  </button>
);

const CartButton = () => (
  <button className={styles.button} aria-label="Cart">
    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
  </button>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Stuff</h1>
      <NavLinks></NavLinks>
      <div className={styles.buttonGroup}>
        <Search></Search>
        <CartButton></CartButton>
      </div>
    </header>
  );
};

export default Header;
