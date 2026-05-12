import { NavigationItem } from './types'

export const navigation: NavigationItem[] = [
  {
    route: '/',
    name: '<img src="/kuvat/koti.png" alt="Koti" class="home">'
  },
  {
    route: '/astiastot/vanilja',
    name: 'Astiastot'
  },
  {
    route: '/astiastot/vanilja',
    name: 'Vanilja',
    tableset: true
  },
  {
    route: '/astiastot/greengate',
    name: 'Green Gate',
    tableset: true
  },
  {
    route: '/tarjoilu',
    name: 'Tarjoilu'
  },
  {
    route: '/lasit',
    name: 'Lasit'
  },
  {
    route: '/koristelu',
    name: 'Koristelu'
  },
  {
    route: '/muut',
    name: 'Muut'
  },
  {
    route: '/vuokraehdot',
    name: 'Vuokraehdot'
  },
  {
    route: '/yhteystiedot',
    name: 'Yhteystiedot'
  }
]
