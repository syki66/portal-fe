import React, { useState } from 'react'
import DragAndDrop from '../../../components/DragAndDrop/DragAndDrop'
import Card from '../../../components/Card/Card'
import { cardJson } from '../../../sampleData/PortalCard'

export default function PortalCard() {
    const [cards, setCards] = useState(cardJson)
    return (
        <DragAndDrop
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
        </DragAndDrop>
    )
}