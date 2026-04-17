import { RentalOrLinkedRentalItem } from '../types'
import { rentalItemsResolved } from './allItems'

export function greenGate(): RentalOrLinkedRentalItem[] {
  return [
    {
      name: 'Lattemuki',
      pcs: 40,
      volume: 0.3,
      description: 'Kuosit vaihtelevat.',
      image: '/kuvat/greengate/lattemuki.jpg',
      price: 0
    },
    {
      name: 'Lautanen',
      pcs: 40,
      diameter: 20,
      description: 'Kuosit vaihtelevat.',
      image: '/kuvat/greengate/lattemuki.jpg',
      price: 0
    },
    {
      name: 'Kermakko ja sokerikko',
      pcs: 1,
      volume: 0.5,
      image: '/kuvat/greengate/kermakkosokerikko.jpg',
      price: 0
    },
    {
      name: 'Kapea tarjoiluvati',
      width: 15,
      length: 32,
      pcs: 1,
      image: '/kuvat/greengate/kapea_tarjoiluvati.jpg',
      price: 0
    },
    {
      name: 'Sydänvadit',
      diameter: 27,
      pcs: 1,
      image: '/kuvat/greengate/sydanvadit.jpg',
      price: 0
    },
    {
      name: 'Teepannu',
      pcs: 1,
      image: '/kuvat/greengate/teepannu.jpg',
      price: 0
    },
    { linked: 2 }
  ]
}

export function greenGateResolved() {
  return rentalItemsResolved(greenGate())
}
