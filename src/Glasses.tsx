import { Layout } from './components/Layout'
import type { RentalItem } from './types.ts'
import { RentalItemsTable } from './components/RentalItemsTable.tsx'

const rentalItems: RentalItem[] = [
  {
    name: 'Kuohuviinilasi',
    pcs: 96,
    height: 10,
    volume: 0.1,
    image: '/kuvat/lasit/kuohuviinilasit.jpg',
    price: 0.5
  },
  {
    name: 'Sydänlasi',
    brand: 'Pentik',
    pcs: 18,
    image: '/kuvat/lasit/sydanlasi.jpg',
    price: 1
  },
  {
    name: 'Verna',
    brand: 'Iittala',
    pcs: 12,
    volume: 0.22,
    image: '/kuvat/lasit/verna_sininen.jpg',
    price: 1.5
  },
  {
    name: 'Krouvi',
    brand: 'Arabia',
    pcs: 12,
    volume: 0.5,
    image: '/kuvat/lasit/krouvi.jpg',
    price: 2
  }
]

const Glasses = () => {
  return (
    <Layout
      pageTitle="Lasit"
      content={
        <div>
          <RentalItemsTable rentalItems={rentalItems} />
        </div>
      }
    />
  )
}

export default Glasses
