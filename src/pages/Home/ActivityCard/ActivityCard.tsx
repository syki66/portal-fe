import React, { useState } from 'react';
import Widget from '../../../components/Widget/Widget';
import DragAndDrop from '../../../components/DragAndDrop/DragAndDrop';
import { activityJson } from '../../../sampleData/ActivityCard';

export default function ActivityCard() {
  const [widgets, setWidgets] = useState(activityJson);
  return (
    <DragAndDrop
      cards={widgets}
      setCards={setWidgets}
    >
      {widgets.map(({ id, title, content }) => (
        <Widget
          key={id}
          title={title}
          content={content}
        />
      ))}
    </DragAndDrop>
  );
}
