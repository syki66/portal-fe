const sampleList = [
    {
      id: 1,
      title: 'MDR',
      desc: 'Biomedical Management',
      iconPath: 'https://i.imgur.com/cOSEdWk.png',
      bgColor: '#e6fafe',
      accentColor: '#05d4f6'
    },
    {
      id: 2,
      title: 'Clinical Assessment',
      desc: 'Questionaries and CRF management',
      iconPath: 'https://i.imgur.com/cOSEdWk.png',
      bgColor: '#ffecf2',
      accentColor: '#ff4883'
    },
    {
      id: 3,
      title: 'Data Transform',
      desc: 'SDTM and Data query',
      iconPath: 'https://i.imgur.com/cOSEdWk.png',
      bgColor: '#fff7eb',
      accentColor: '#ffb13e'
    },
    {
      id: 4,
      title: 'Education',
      desc: 'List of service',
      iconPath: 'https://i.imgur.com/cOSEdWk.png',
      bgColor: '#eeecfe',
      accentColor: '#5643fc'
    },
    {
      id: 5,
      title: 'Report',
      desc: 'Analysis and Sharing template',
      iconPath: 'https://i.imgur.com/cOSEdWk.png',
      bgColor: '#efffef',
      accentColor: '#08a800'
    }
  ]

  let cardJson: any[] = []
  Array.from(Array(100).keys()).map((e, idx) => {
    const rand = Math.floor(Math.random() * sampleList.length)
    cardJson.push({
        id: idx + 1,
        title: sampleList[rand].title,
        desc: sampleList[rand].desc,
        iconPath: sampleList[rand].iconPath,
        bgColor: sampleList[rand].bgColor,
        accentColor: sampleList[rand].accentColor
    })
  })  

export { cardJson }