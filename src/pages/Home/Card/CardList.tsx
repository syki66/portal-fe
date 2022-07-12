import React, { useState } from 'react';
import Card from './Card';
import './CardList.scss';
import mdrIcon from '../../../assets/Home/Card/mdr.png';

export default function CardList() {
  const [active, setActive] = useState(false);
  const onClick = () => {
    active ? setActive(false) : setActive(true);
  }
  return (
    <>
      <button onClick={onClick}>홈 화면 편집</button>
      <div className='container'>
        <Card
          title='MDR'
          desc='Biomedical Management'
          iconPath={mdrIcon}
          bgColor='#e6fafe'
          accentColor='#05d4f6'
          active={active}
        />
        <Card
          title='Clinical Assessment'
          desc='Questionaries and CRF management'
          iconPath={mdrIcon}
          bgColor='#ffecf2'
          accentColor='#ff4883'
          active={active}
        />
        <Card
          title='Data Transform'
          desc='SDTM and Data query'
          iconPath={mdrIcon}
          bgColor='#fff7eb'
          accentColor='#ffb13e'
          active={active}
        />
        <Card
          title='Education'
          desc='List of service'
          iconPath={mdrIcon}
          bgColor='#eeecfe'
          accentColor='#5643fc'
          active={active}
        />
        <Card
          title='Report'
          desc='Analysis and Sharing template'
          iconPath={mdrIcon}
          bgColor='#eeecfe'
          accentColor='#5643fc'
          active={active}
        />
        <Card
          title='MDR'
          desc='Biomedical Management'
          iconPath={mdrIcon}
          bgColor='#eeecfe'
          accentColor='#5643fc'
          active={active}
        />
        <Card
          title='MDR'
          desc='Biomedical Management'
          iconPath={mdrIcon}
          bgColor='#eeecfe'
          accentColor='#5643fc'
          active={active}
        />
      </div>
    </>
  )
}
