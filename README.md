# portal-fe

`독립된 하위 서비스들을 연결해주는 웹 서비스`의 프론트엔드 레포지토리

[backend 저장소 주소]()

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

- React.js
- Typescript
- SCSS
- CSS MODULE

## 디렉토리 구조

대부분의 코드는 `src` 폴더에 작성됨

    src
    ├── assets                   # 정적 자료를 모아놓은 폴더
    ├── components               # 공통 컴포넌트 폴더
    │   ├── Card                    # 카드 컴포넌트
    │   ├── Widget                  # 위젯 컴포넌트
    │   └── DragAndDrop             # 드래그 앤 드롭 및 모션 컴포넌트
    ├── pages                    # 페이지 컴포넌트 폴더
    │   ├── Home                    # 메인 페이지
    │   │   ├── ActivityCard            # 대시보드 컴포넌트
    │   │   └── PortalCard              # 포털 카드 컴포넌트
    │   ├── Login                   # Login 페이지
    │   └── NotFound                # 404 페이지
    ├── styles                   # 공통 스타일 폴더
    └── utils                    # 공통 함수 폴더

## 컴포넌트 설명

### `Card`

### `Widget`

### `DragAndDrop`

[react-sortablejs](https://github.com/SortableJS/react-sortablejs)에 편집 및 드롭 모션을 추가하여 래핑함

데이터에 중복되지 않은 `id: number` 값 `필수` (id값이 없으면 dataTransfer가 동작하지 않고, 중복된다면 컴포넌트가 복제되는 에러 발생)

props로 `state`, `setState` 값을 받으며 `필수`

`DragAndDrop` 컴포넌트 사이에 자식 컴포넌트들을 넣으면 됨

```typescript
import React, { useState } from 'react'
import DragAndDrop from '../../../components/DragAndDrop/DragAndDrop'
import Card from '../../../components/Card/Card'

const array = [
    {
      id: 1,
      title: 'MDR',
      content: 'Biomedical Management'
    },
    {
      id: 2,
      title: 'Clinical Assessment',
      content: 'Questionaries and CRF management'
    },
    {
      id: 3,
      title: 'Data Transform',
      content: 'SDTM and Data query'
    }
]

export default function PortalCard() {
    const [cards, setCards] = useState(array)
    return (
        <DragAndDrop
            cards={cards}
            setCards={setCards}
        >
            {cards.map(({ id, title, content }) => (
                <Card 
                    key={id}
                    title={title}
                    content={content}
                />
            ))}
        </DragAndDrop>
    )
}
```
