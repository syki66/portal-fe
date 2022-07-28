import React, { useRef, useState } from 'react';
import styles from './CardList.module.scss';
import deleteIcon from '../../../assets/Home/Card/delete.svg';
import { ReactSortable } from "react-sortablejs";

type Props = {
  children: any,
  cards: any,
  setCards: any
}

export default function CardList({children, cards, setCards}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const onClick = () => {
    isEdit ? setIsEdit(false) : setIsEdit(true);
  }
  const elemRef = useRef([0, 0]);

  const onDelete = (id: number) => {
    setCards(cards.filter((card: {id: number}) => card.id !== id));
  };

  const onChoose = (event: any) => {
    // offset은 하위 elem을 클릭할 경우 오작동, layer는 컴포넌트 변경될 때 오작동 함
    const { pageX, pageY } = event.originalEvent
    const { offsetLeft, offsetTop } = event.item
    const [ elemX, elemY ] = [pageX - offsetLeft, pageY - offsetTop] // 클릭한 요소 위에서의 마우스 위치
    elemRef.current = [elemX, elemY]
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
        {cards.map((card: {id: number}, index: number) => (
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
                {children[index]}
            </div>
          </div>
        ))}
      </ReactSortable>
    </>
  );
}