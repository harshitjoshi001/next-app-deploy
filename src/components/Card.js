"use client";

import styles from "../styles/card.module.css";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";

export const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: data.name,
    title: data.title,
    body: data.body,
  });

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        <h5>{data.id}</h5>
        <h2> Post title : {data.title}</h2>
        <h4>Posted By : {data.name}</h4>
        <Link
          className={styles.detailsButton}
          style={{ padding: "5px" }}
          href={`/post/${data.id}`}
        >
          View Details
        </Link>
        <button
          style={{
            backgroundColor: "white",
            color: "grey",
            padding: "3px",
            border: "1px solid grey",
            borderRadius: "5px",
            boxShadow: "1px 2px 2px 1px",
            width: "70px",
          }}
          onClick={() => setIsOpen(true)}
        >
          Edit
        </button>
        <Modal
          isOpen={isOpen}
          formData={formData}
          setFormData={setFormData}
          onClose={() => setIsOpen(false)}
          method={"PUT"}
          endpoint={`https://672870c2270bd0b9755571d5.mockapi.io/api/v1/users/${data.id}`}
        />
      </div>
    </div>
  );
};
