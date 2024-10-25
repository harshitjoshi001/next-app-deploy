import styles from "../styles/card.module.css";
import Link from "next/link";

export const Card = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        <h5>{data.id}</h5>
        <h2> Post title : {data.title}</h2>
        <h4>Posted By : John Doe</h4>
        <Link
          className={styles.detailsButton}
          style={{ padding: "5px" }}
          href={`/post/${data.id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
