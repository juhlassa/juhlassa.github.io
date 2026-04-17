import { RentalOrLinkedRentalItem } from '../types'
import { rentalItemsResolved } from './allItems'

export function glasses(): RentalOrLinkedRentalItem[] {
  return [
    {
      name: 'Kuohu&shy;viini&shy;lasi',
      pcs: 96,
      height: 10,
      volume: 0.1,
      image: '/kuvat/lasit/kuohuviinilasit.jpg',
      price: 0
    },
    {
      name: 'Sydänlasi',
      brand: 'Pentik',
      pcs: 18,
      image: '/kuvat/lasit/sydanlasi.jpg',
      price: 0
    },
    {
      name: 'Verna',
      brand: 'Iittala',
      pcs: 12,
      volume: 0.22,
      image: '/kuvat/lasit/verna_sininen.jpg',
      price: 0
    },
    {
      name: 'Tsaikka',
      brand: 'Iittala',
      pcs: 15,
      volume: 0.23,
      image: '/kuvat/lasit/tsaikka.jpg',
      price: 0
    },
    {
      linked: 1
    }
  ]
}

export function glassesResolved() {
  return rentalItemsResolved(glasses())
}
