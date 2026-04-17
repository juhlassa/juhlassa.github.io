import { RentalOrLinkedRentalItem } from '../types'
import { rentalItemsResolved } from './allItems'

export function tableClothings(): RentalOrLinkedRentalItem[] {
  return [
    {
      name: 'Pöytäliina, valkoinen',
      width: 145,
      length: 240,
      pcs: 10,
      material: 'polyesteri',
      image: '/kuvat/poytaliinat/poytaliina.jpg',
      price: 0
    }
  ]
}

export function tableClothingsResolved() {
  return rentalItemsResolved(tableClothings())
}
