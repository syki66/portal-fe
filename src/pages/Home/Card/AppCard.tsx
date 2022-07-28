import React, { useState } from 'react'
import CardList from '../Card/CardList'
import Card from '../Card/Card'
import { cardJson } from '../Card/cardData'

export default function AppCard() {
    const [cards, setCards] = useState(cardJson)
    return (
        <CardList
            cards={cards}
            setCards={setCards}
        >
            {cards.map(({ id, title, desc, iconPath, bgColor, accentColor }) => (
                <Card 
                    key={id}
                    title={title}
                    desc={desc}
                    iconPath={iconPath}
                    bgColor={bgColor}
                    accentColor={accentColor}
                />
            ))}
        </CardList>
    )
}