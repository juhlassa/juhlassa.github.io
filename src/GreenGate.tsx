import { Layout } from './components/Layout.tsx'
import { TablesetsNavigation } from './components/TablesetsNavigation.tsx'
import { RentalItemsTable } from './components/RentalItemsTable.tsx'
import type { RentalItem } from './types.ts'
import { ContentImage } from './components/ContentImage.tsx'

const rentalItems: RentalItem[] = [
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
  }
]

const GreenGate = () => {
  return (
    <Layout
      pageTitle="Astiastot"
      content={
        <>
          <TablesetsNavigation selected="greengate" />
          <div>
            <ContentImage
              url={'/kuvat/greengate.jpg'}
              float={'left'}
              maxWidth={'280px'}
            />
            <h2>Green Gate</h2>
            <p>
              Green Gate -astiat luovat kattaukseen ainutlaatuista tunnelmaa,
              jossa yhdistyvät romanttinen vintage-tyyli ja moderni
              käytännöllisyys.
            </p>
            <p>
              Tanskalainen merkki tunnetaan kauniisti kuvioiduista astioistaan,
              joiden pehmeät värit ja kukkakuosit ihastuttavat romantiikan
              ystäviä. Värejä ja kuoseja voi yhdistellä omien mieltymysten
              mukaan.
            </p>
            <p>
              Sarja on erityisesti nuorempien asiakkaiden mieleen, koska se
              yhdistää nykypäivän mukikulttuurin ja kauneuden. Lattekuppi on
              reilun kokoinen eikä sitä tarvitse olla koko ajan täyttämässä.
            </p>
            <p>
              Kun katat pöydän suloisilla Green Gate -astioilla, vieraiden
              huomio on taattu. Tätä sarjaa et helposti muualta löydä.{' '}
            </p>
          </div>
          <RentalItemsTable rentalItems={rentalItems} gapBeforeList={true} />
        </>
      }
    />
  )
}

export default GreenGate
