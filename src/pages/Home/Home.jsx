// Home.jsx
import styles from "./Home.module.css";
import Featured from "../../components/Featured/Featured";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Stuff</h2>
      </div>
      <Featured />
    </>
  );
};

export default Home;
