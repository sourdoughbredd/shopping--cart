import { useParams } from "react-router-dom";
import useFetchCategory from "../../hooks/useFetchCategory";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";

// Products Page
const Products = () => {
  const { category } = useParams();
  const { products, error, loading } = useFetchCategory(category);

  // Page generator to allow shared content between error,
  // loading, and normal pages
  const Page = (content) => {
    return (
      <div className={styles.productsPage}>
        <h1 className={styles.title}>
          {category === "jewelery" ? "jewelry" : category}
        </h1>
        <div className={styles.container}>{content}</div>
      </div>
    );
  };

  // Render
  if (error) return Page(<p>An error occurred: {error.message}</p>);
  if (loading) return Page(<p>Loading...</p>);
  return Page(products.map((p) => <ProductCard key={p.id} product={p} />));
};

export default Products;
