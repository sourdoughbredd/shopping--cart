import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();

  // Get products in category

  return (
    <>
      <h1>{category}</h1>
    </>
  );
};

export default Products;
