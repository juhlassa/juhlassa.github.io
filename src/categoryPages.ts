import type { Group } from './types'

export type CategoryPage = {
  group: Group
  description: string
  mediaImage: string
}

// Keys are top-level URL slugs
export const categoryPages: Record<string, CategoryPage> = {
  tarjoilu: {
    group: 'Tarjoilu',
    description:
      'Vuokraa tarjoiluastiat ja -tarvikkeet helposti juhliin ja tilaisuuksiin – ylelliset kerrostarjoittimet ja muut tarjoiluastiat tekevät kattauksesta näyttävän.',
    mediaImage: '/kuvat/tarjoilu/mariskooli_kirkas_pieni.jpg'
  },
  lasit: {
    group: 'Lasit',
    description:
      'Vuokraa tyylikkäät juomalasit juhliin – valikoima kuohuviini- ja muita laseja viimeistelee kattauksen.',
    mediaImage: '/kuvat/lasit/kuohuviinilasit.jpg'
  },
  koristelu: {
    group: 'Koristelu',
    description:
      'Viimeistele juhla pienillä yksityiskohdilla – yksilölliset koristeet ja somisteet tuovat tyyliä ja tunnelmaa jokaiseen tilaisuuteen.',
    mediaImage: '/kuvat/koristelu/kynttilajalka.jpg'
  },
  muut: {
    group: 'Muut',
    description:
      'Muut vuokrattavat tuotteet juhliin ja tilaisuuksiin – löydä täydentävät tarvikkeet helposti samasta paikasta.',
    mediaImage: '/kuvat/muut/karkkibuffet.jpg'
  }
}
