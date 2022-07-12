import React from "react";
import "./Card.scss";

type CardProps = {
  title: string;
  desc: string;
  iconPath: string;
  bgColor: string;
  accentColor: string;
  active: boolean;
};

export default function Card({
  title,
  desc,
  iconPath,
  bgColor,
  accentColor,
  active,
}: CardProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          color: accentColor,
          borderColor: accentColor,
        }}
        className={`card ${active ? "card--active" : ""}`}
      >
        <img className="card__icon" src={iconPath} />
        <div className="card__content">
          <h1 className="card__title">{title}</h1>
          <p className="card__desc">{desc}</p>
        </div>
      </div>
    </>
  );
}
