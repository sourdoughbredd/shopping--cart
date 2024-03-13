import { useParams } from "react-router-dom";
import useFetchCategory from "../../hooks/useFetchCategory";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const { category } = useParams();
  const { products, error, loading } = useFetchCategory(category);

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

  if (error) return Page(<p>Error</p>);
  if (loading) return Page(<p>Loading...</p>);
  return Page(products.map((p) => <ProductCard key={p.id} product={p} />));
};

export default Products;
