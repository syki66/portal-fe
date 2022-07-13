import React, { useState } from 'react';
import Card from './Card';
import styles from './CardList.module.scss';
import mdrIcon from '../../../assets/Home/Card/mdr.png';

const cardList = [
  {
    id: 1,
    title: 'MDR',
    desc: 'Biomedical Management',
    iconPath: mdrIcon,
    bgColor: '#e6fafe',
    accentColor: '#05d4f6'
  },
  {
    id: 2,
    title: 'Clinical Assessment',
    desc: 'Questionaries and CRF management',
    iconPath: mdrIcon,
    bgColor: '#ffecf2',
    accentColor: '#ff4883'
  },
  {
    id: 3,
    title: 'Data Transform',
    desc: 'SDTM and Data query',
    iconPath: mdrIcon,
    bgColor: '#fff7eb',
    accentColor: '#ffb13e'
  },
  {
    id: 4,
    title: 'Education',
    desc: 'List of service',
    iconPath: mdrIcon,
    bgColor: '#eeecfe',
    accentColor: '#5643fc'
  },
  {
    id: 5,
    title: 'Report',
    desc: 'Analysis and Sharing template',
    iconPath: mdrIcon,
    bgColor: '#eeecfe',
    accentColor: '#5643fc'
  }
]

export default function CardList() {
  const [cards, setCards] = useState(cardList);
  const [isEdit, setIsEdit] = useState(false);
  const onClick = () => {
    isEdit ? setIsEdit(false) : setIsEdit(true);
  }
  return (
    <>
      <button onClick={onClick}>홈 화면 편집</button>
      <div className={styles.cards}>
        {cards.map(card => {
          return <Card 
            id={card.id}
            title={card.title}
            desc={card.desc}
            iconPath={card.iconPath}
            bgColor={card.bgColor}
            accentColor={card.accentColor}
            isEdit={isEdit}
          />
        })}
      </div>
    </>
  )
}
