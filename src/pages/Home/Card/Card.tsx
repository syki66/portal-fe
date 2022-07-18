import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  desc: string;
  iconPath: string;
  bgColor: string;
  accentColor: string;
  isEdit: boolean;
};

export default function Card({ title, desc, iconPath, bgColor, accentColor, isEdit }: CardProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          color: accentColor,
          borderColor: accentColor,
        }}
        className={`${styles.card} ${isEdit ? styles.editing : ""}`}
      >
        <img className={styles.icon} src={iconPath} />
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </>
  );
}