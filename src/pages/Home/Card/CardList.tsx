import React, { useRef, useState } from 'react';
import Card from './Card';
import styles from './CardList.module.scss';
import mdrIcon from '../../../assets/Home/Card/mdr.png';
import deleteIcon from '../../../assets/Home/Card/delete.svg';
import { ReactSortable } from "react-sortablejs";

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
  const elemRef = useRef([0, 0]);

  const onDelete = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const onChoose = (event: any) => {
    const { layerX, layerY } = event.originalEvent; // offset은 하위 elem일 경우 좌표값이 거기에 맞춰서 변경됨
    elemRef.current = [layerX, layerY];
  }

  const onEnd = (event: any) => { // onUnchoose와 다른 점은 제자리에서 카드 놓을때 실행 안됨
    const {
      offsetLeft, offsetTop, // 아이템 이동 전 카드 좌표
      toRect, // 아이템 이동 후 카드 좌표
    } = event.item;
    const { clientX, clientY } = event.originalEvent; // 드롭시 마우스 좌표
    
    let posX: number, posY: number;
    if (toRect === undefined) {
      posX = offsetLeft;
      posY = offsetTop;
    } else {
      posX = toRect.left;
      posY = toRect.top;
    }

    const moveX: number = clientX - posX - elemRef.current[0];
    const moveY: number = clientY - posY - elemRef.current[1];
    
    // keyframes
    event.item.animate(
      [
        {
          transform: `translate(${moveX}px, ${moveY}px)`
        }
      ],
      {
        duration: 150,
        direction: "reverse",
        easing: "linear",
      }
    );  
  }

  return (
    <>
      <button onClick={onClick}>홈 화면 편집</button>
      <ReactSortable
        list={cards}
        setList={setCards}
        className={styles.cards}
        ghostClass={styles.ghost}
        chosenClass={styles.chosen}
        dragClass={styles.drag}
        disabled={!isEdit}
        animation={400}
        onChoose={onChoose}
        onEnd={onEnd}

        // delayOnTouchStart={true}
        // easing="cubic-bezier(1, 0, 0, 1)"
      >
        {/* 최상위 요소에 transform을 적용하면 sortable.js의 animation 옵션이 적용 안됨 */}
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={`${styles.wrap} ${isEdit ? styles.editing : ""}`}>
              {isEdit ? (
                <img
                  className={styles.delete}  
                  onClick={() => onDelete(card.id)}
                  draggable={false}
                  src={deleteIcon}
                />
              ) : (
                <></>
              )}
              <Card
                title={card.title}
                desc={card.desc}
                iconPath={card.iconPath}
                bgColor={card.bgColor}
                accentColor={card.accentColor}
              />
            </div>
          </div>
        ))}
      </ReactSortable>
    </>
  );
}