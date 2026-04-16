import { NavigationItem } from './types'

export const defaultKeywords = [
  'pramiatvadit',
  'astiavuokraus',
  'astiavuokraamo',
  'vuokra-astiat',
  'juhlavuokraus',
  'juhlat',
  'ilmajoki',
  'seinäjoki',
  'etelä-pohjanmaa',
  'virpi kupiainen'
]

export const navigation: NavigationItem[] = [
  {
    route: '/',
    name: '<img src="/kuvat/koti.png" alt="Koti" class="home">',
    keywords: defaultKeywords.concat([
      'kattaus',
      'kynttiläjalka',
      'juhlakoristelu'
    ])
  },
  {
    route: '/astiastot',
    name: 'Astiastot'
  },
  {
    route: '/astiastot/vanilja',
    name: 'Vanilja',
    tableset: true,
    keywords: defaultKeywords.concat([
      'astiasto',
      'kattaus',
      'pentik',
      'vanilja'
    ])
  },
  {
    route: '/astiastot/greengate',
    name: 'Green Gate',
    tableset: true,
    keywords: defaultKeywords.concat(['astiasto', 'kattaus', 'greengate'])
  },
  {
    route: '/tarjoilu',
    name: 'Tarjoilu',
    keywords: defaultKeywords.concat([
      'tarjoilu',
      'iittala',
      'riviera mason',
      'perfect home'
    ])
  },
  {
    route: '/lasit',
    name: 'Lasit',
    keywords: defaultKeywords.concat(['pentik', 'verna', 'tsaikka'])
  },
  {
    route: '/poytaliinat',
    name: 'Pöytäliinat',
    keywords: defaultKeywords.concat(['pöytäliinat'])
  },
  {
    route: '/koristelu',
    name: 'Koristelu',
    keywords: defaultKeywords.concat([
      'koristelu',
      'koristeet',
      'kynttilä, kynttelikkö',
      'kynttiläjalka',
      'valot',
      'pallovalot'
    ])
  },
  {
    route: '/muut',
    name: 'Muut',
    keywords: defaultKeywords.concat([
      'peräkärrypalju',
      'palju',
      'kuvausseinä',
      'partylite'
    ])
  },
  {
    route: '/vuokraehdot',
    name: 'Vuokraehdot',
    keywords: defaultKeywords.concat(['vuokraehdot'])
  },
  {
    route: '/yhteystiedot',
    name: 'Yhteystiedot',
    keywords: defaultKeywords.concat(['yhteystiedot', 'leinikintie 12'])
  }
]
