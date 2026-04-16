import { Layout } from '../../components/Layout'
import type { RentalItem } from '../../types'
import { RentalItemsTable } from '../../components/RentalItemsTable'

const rentalItems: RentalItem[] = [
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
    name: 'Krouvi',
    brand: 'Arabia',
    pcs: 12,
    volume: 0.5,
    image: '/kuvat/lasit/krouvi.jpg',
    price: 0
  }
]

const Index = () => {
  return (
    <Layout
      pageTitle="Lasit"
      track={true}
      content={
        <div>
          <RentalItemsTable rentalItems={rentalItems} />
        </div>
      }
    />
  )
}

export default Index
