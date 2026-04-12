import { Layout } from './components/Layout'
import { type RentalItem } from './types'
import { RentalItemsTable } from './components/RentalItemsTable'

const rentalItems: RentalItem[] = [
  {
    name: 'Donitsibaari',
    pcs: 1,
    unit: 'setti',
    image: '/kuvat/muut/donitsitelineet.jpg',
    price: 12
  },
  {
    name: 'Karkkibuffet',
    pcs: 1,
    unit: 'setti',
    description:
      'Näyttävä karkkibuffet syntyy esimerkiksi Vanilja-sarjan kulhoista. Voit koota niin laajan kokonaisuuden kuin haluat.',
    image: '/kuvat/muut/karkkibuffet.jpg',
    price: 0.5
  },
  {
    name: 'Paikka- tai tarjoiluinfopidike',
    height: 5,
    pcs: 35,
    image: '/kuvat/muut/kylttipidike2.jpg',
    price: 0.5
  },
  {
    name: 'Paikka- tai tarjoiluinfopidike',
    height: 12,
    pcs: 12,
    image: '/kuvat/muut/kylttipidike.jpg',
    price: 0.5
  },
  {
    name: 'Tarjoilupihdit',
    length: 12,
    pcs: 12,
    image: '/kuvat/muut/pinsetit.jpg',
    price: 0.5
  },
  {
    name: 'Pyöreä kakkukupu',
    brand: 'Tupperware',
    height: 18,
    diameter: 40,
    pcs: 2,
    image: '/kuvat/muut/pyorea_kakkukupu.jpg',
    price: 7
  },
  {
    name: 'Iso kakkukupu',
    brand: 'Tupperware',
    height: 16,
    width: 45,
    length: 29,
    pcs: 2,
    image: '/kuvat/muut/kakkukupu.jpg',
    price: 7
  },
  {
    name: 'Voileipäkakkukupu',
    brand: 'Tupperware',
    width: 40,
    length: 16,
    height: 18,
    pcs: 2,
    image: '/kuvat/muut/voileipakakkukupu.jpg',
    price: 7
  }
]

const Other = () => {
  return (
    <Layout
      pageTitle="Muut"
      content={
        <>
          <div>
            <RentalItemsTable rentalItems={rentalItems} />
          </div>
        </>
      }
    />
  )
}

export default Other
