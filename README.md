# portal-fe

`독립된 하위 서비스들을 연결해주는 웹 서비스`의 프론트엔드 저장소

[백엔드 저장소 주소]()

## 도구

### `언어` 및 `프레임워크`

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

### `정적 분석 도구` 및 `formatter`

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-ffffff?style=for-the-badge&logo=prettier)

## 디렉토리 구조

대부분의 코드는 `src` 폴더에 작성됨

    src
    ├── assets                   # 정적 자료를 모아놓은 폴더
    ├── styles                   # 공통 스타일 폴더
    ├── utils                    # 공통 함수 폴더
    ├── components               # 공통 컴포넌트 폴더
    │   ├── Card                    # 카드 컴포넌트
    │   ├── Widget                  # 위젯 컴포넌트
    │   └── DragAndDrop             # 드래그 앤 드롭 및 모션 컴포넌트
    └── pages                    # 페이지 컴포넌트 폴더
        ├── Home                    # 메인 페이지
        │   ├── ActivityCard            # 대시보드 컴포넌트
        │   └── PortalCard              # 포털 카드 컴포넌트
        ├── Login                   # Login 페이지
        └── NotFound                # 404 페이지

## 컴포넌트 사용법

### `Card`

- `제목`, `설명`, `아이콘`, `배경색`, `강조색`을 설정할 수 있음
- 배경이 투명한 png 파일을 사용해야됨 (색상은 강조색으로 자동 변환)

```ts
import React, { useState } from 'react';
import Card from './components/Card/Card';

export default function CardExample() {
  return (
    <Card
      title='MDR'
      desc='Biomedical Management'
      iconPath='https://i.imgur.com/cOSEdWk.png'
      bgColor='#e6fafe'
      accentColor='#05d4f6'
    />
  );
}
```

### `Widget`

- 진행중

### `DragAndDrop`

- [react-sortablejs](https://github.com/SortableJS/react-sortablejs)에 편집, 삭제 및 드롭 모션을 추가하여 래핑함
- 데이터에 중복되지 않은 `id: number` 값 `필수` (id값이 없으면 dataTransfer가 동작하지 않고, 중복된다면 컴포넌트가 복제되는 에러 발생)
- props로 `state`, `setState` 값을 받으며 `필수`
- `DragAndDrop` 컴포넌트 사이에 자식 컴포넌트들을 넣으면 됨

```ts
import React, { useState } from 'react';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';

const array = [
  {
    id: 1,
    title: 'MDR',
    content: 'Biomedical Management',
  },
  {
    id: 2,
    title: 'Clinical Assessment',
    content: 'Questionaries and CRF management',
  },
  {
    id: 3,
    title: 'Data Transform',
    content: 'SDTM and Data query',
  },
];

export default function DragAndDropExample() {
  const [cards, setCards] = useState(array);
  return (
    <DragAndDrop
      cards={cards}
      setCards={setCards}
    >
      {cards.map(({ id, title, content }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      ))}
    </DragAndDrop>
  );
}
```

## 코드 검사

커밋하면 먼저 `eslint`와 `prettier`가 자동으로 실행되며, 이를 통과하지 못할시 커밋이 취소됨

아래 명령어를 통해서 자동으로 수정 가능 _(자동으로 수정되지 않는 경우 직접 수정)_

```
npm run lint
```

vscode 확장 프로그램에서 eslint 및 prettier를 설치하고, 아래 설정을 vscode의 `settings.json`에 추가하면 파일을 저장할때마다 자동 수정할 수 있음

```json
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "eslint.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
```

## Todos

- [TODO.md](https://github.com/syki66/portal-fe/blob/master/TODO.md)
