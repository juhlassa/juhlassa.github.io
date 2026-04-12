import { Layout } from './components/Layout'
import type { RentalItem } from './types.ts'
import { RentalItemsTable } from './components/RentalItemsTable.tsx'

const rentalItems: RentalItem[] = [
  {
    name: 'Kerrostarjotin, 2&nbsp;kerrosta',
    brand: 'Riviera Maison',
    height: 46,
    pcs: 3,
    image: '/kuvat/tarjoilu/kerrostarjotin2.jpg',
    price: 0
  },
  {
    name: 'Kerrostarjotin, 3&nbsp;kerrosta',
    brand: 'Riviera Maison',
    height: 72,
    pcs: 1,
    image: '/kuvat/tarjoilu/kerrostarjotin3.jpg',
    price: 0
  },
  {
    name: 'Kerrostarjotin, 5&nbsp;kerrosta',
    brand: 'Riviera Maison',
    height: 87,
    description:
      'Kokonaisuutta voi muokata lisäämällä vain tarvittavat kerrokset',
    pcs: 1,
    image: '/kuvat/tarjoilu/kerrostarjotin5.jpg',
    price: 0
  },
  {
    name: 'Kapea kerrostarjotin, 3&nbsp;kerrosta',
    height: 44,
    description:
      'Kokonaisuutta voi muokata lisäämällä vain tarvittavat kerrokset',
    pcs: 1,
    image: '/kuvat/tarjoilu/pieni_kerrosvati3.jpg',
    price: 0
  },
  {
    name: 'Iso juomacooleri',
    brand: 'Orrefors',
    diameter: 47,
    height: 34,
    pcs: 1,
    image: '/kuvat/tarjoilu/cooler_iso.jpg',
    price: 0
  },
  {
    name: 'Juomacooleri',
    diameter: 34,
    height: 23,
    pcs: 1,
    image: '/kuvat/tarjoilu/cooler.jpg',
    price: 0
  },
  {
    name: 'Pieni juomacooleri',
    diameter: 29,
    height: 22,
    pcs: 1,
    image: '/kuvat/tarjoilu/cooler_pieni.jpg',
    price: 0
  },
  {
    name: 'Lasikannu',
    volume: 0.55,
    pcs: 1,
    image: '/kuvat/tarjoilu/lasikannut.jpg',
    price: 0
  },
  {
    name: 'Lasikannu, pieni',
    volume: 0.25,
    pcs: 2,
    image: '/kuvat/tarjoilu/lasikannut.jpg',
    price: 0
  },
  {
    name: 'Mariskooli, kirkas, iso',
    brand: 'Iittala',
    height: 15.5,
    pcs: 12,
    image: '/kuvat/tarjoilu/mariskooli_kirkas_iso.jpg',
    price: 0
  },
  {
    name: 'Mariskooli, kirkas, pieni',
    brand: 'Iittala',
    height: 12,
    pcs: 8,
    image: '/kuvat/tarjoilu/mariskooli_kirkas_pieni.jpg',
    price: 0
  },
  {
    name: 'Mariskooli, turkoosi, iso',
    brand: 'Iittala',
    height: 15.5,
    pcs: 12,
    image: '/kuvat/tarjoilu/mariskooli_sininen_pieni.jpg',
    price: 0
  },
  {
    name: 'Mariskooli, turkoosi, pieni',
    brand: 'Iittala',
    height: 12,
    pcs: 8,
    image: '/kuvat/tarjoilu/mariskooli_sininen_pieni.jpg',
    price: 0
  },
  {
    name: 'Jäätelö-/jälkiruokamalja',
    pcs: 20,
    image: '/kuvat/tarjoilu/jalkiruokalasi.jpg',
    price: 0
  },
  {
    name: 'Iso tarjotin',
    width: 42,
    length: 65,
    pcs: 1,
    image: '/kuvat/tarjoilu/iso_tarjotin.jpg',
    price: 0
  },
  {
    name: 'Peilitarjotin',
    width: 36,
    length: 32,
    pcs: 2,
    image: '/kuvat/tarjoilu/peilitarjotin.jpg',
    price: 0
  },
  {
    name: 'Sydäntarjotin',
    diameter: 17,
    pcs: 2,
    image: '/kuvat/tarjoilu/sydantarjotin.jpg',
    price: 0
  },
  {
    name: 'Kakkutarjotin',
    brand: 'Riviera Maison',
    diameter: 30,
    description: 'Cake My Day',
    pcs: 1,
    image: '/kuvat/tarjoilu/kakkutarjotin.jpg',
    price: 0
  },
  {
    name: 'Tarjotin',
    brand: 'Perfect Home',
    width: 20,
    length: 45,
    pcs: 3,
    image: '/kuvat/tarjoilu/tarjotin.jpg',
    price: 0
  },
  {
    name: 'Jalallinen tarjotin',
    brand: 'Riviera Maison',
    width: 25,
    length: 36,
    height: 12,
    pcs: 1,
    image: '/kuvat/tarjoilu/voileipakakkutarjotin.jpg',
    price: 0
  },
  {
    name: 'Jalallinen kakkutarjotin',
    brand: 'Tupperware',
    diameter: 30,
    height: 11,
    pcs: 3,
    material: 'elintarvikemuovi',
    image: '/kuvat/tarjoilu/jalallinen_kakkutarjotin.jpg',
    price: 0
  },
  {
    name: 'Juoma-astia',
    pcs: 3,
    description: 'Erilaisia hanallisia juoma-astioita. Kuvat tulossa.',
    image: '/kuvat/tarjoilu/juoma-astia.jpg',
    price: 4
  },
  {
    name: 'Juustotarjotin',
    diameter: 25,
    pcs: 3,
    image: '/kuvat/tarjoilu/juustotarjotin.jpg',
    price: 0
  },
  {
    name: 'Kahvilusikat',
    pcs: 40,
    image: '/kuvat/tarjoilu/lusikat.jpg',
    price: 0
  }
]

const Serving = () => {
  return (
    <Layout
      pageTitle="Tarjoilu"
      content={
        <div>
          <RentalItemsTable rentalItems={rentalItems} />
        </div>
      }
    />
  )
}

export default Serving
