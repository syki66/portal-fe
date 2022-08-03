import React from 'react';
import styles from './Card.module.scss';
import { hexToFilter } from '../../utils/filter';

type CardProps = {
  title: string;
  desc: string;
  iconPath: string;
  bgColor: string;
  accentColor: string;
};

export default function Card({ title, desc, iconPath, bgColor, accentColor }: CardProps) {
  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          color: accentColor,
          borderColor: accentColor,
        }}
        className={styles.card}
      >
        <img
          className={styles.icon}
          src={iconPath}
          style={{ filter: `${hexToFilter(accentColor)}` }} // 필터 적용하면 드롭할 때 약간의 딜레이(깜빡임)이 생김
          draggable={false}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </>
  );
}
