import { type RentalItem } from './types.ts'
import { RentalItemsTable } from './components/RentalItemsTable.tsx'
import { Layout } from './components/Layout.tsx'
import { TablesetsNavigation } from './components/TablesetsNavigation.tsx'
import { LeftContentImage } from './components/ContentImage.tsx'

const rentalItems: RentalItem[] = [
  {
    name: 'Kahvikuppi, asetti ja lautanen',
    pcs: 29,
    image: '/kuvat/vanilja/kahvikuppi.jpg',
    price: 0
  },
  {
    name: 'Teemuki ja lautanen',
    pcs: 8,
    diameter: 21,
    image: '/kuvat/vanilja/teekuppi.jpg',
    price: 0
  },
  {
    name: 'Kermakko ja sokerikko',
    pcs: 3,
    image: '/kuvat/vanilja/sokerikkokermakko.jpg',
    price: 0
  },
  {
    name: 'Kannu',
    volume: 0.6,
    pcs: 1,
    image: '/kuvat/vanilja/kannu.jpg',
    price: 0
  },
  {
    name: 'Jälkiruokakulho',
    pcs: 12,
    diameter: 14,
    height: 6,
    image: '/kuvat/vanilja/jalkiruokakulho.jpg',
    price: 0
  },
  {
    name: 'Syvä ruokalautanen',
    diameter: 21,
    pcs: 10,
    image: '/kuvat/vanilja/syvalautanen.jpg',
    price: 0
  },
  {
    name: 'Matala ruokalautanen',
    diameter: 28,
    pcs: 27,
    image: '/kuvat/vanilja/lautanen.jpg',
    price: 0
  },
  {
    name: 'Sydänlautanen',
    diameter: 17,
    height: 5,
    pcs: 4,
    image: '/kuvat/vanilja/sydanlautanen.jpg',
    price: 0
  },
  {
    name: 'Jalallinen tarjoilukulho',
    diameter: 20,
    height: 20,
    pcs: 8,
    image: '/kuvat/vanilja/tarjoilukulho.jpg',
    price: 0
  },
  {
    name: 'Pieni tarjoilukulho',
    diameter: 21,
    height: 11,
    pcs: 2,
    image: '/kuvat/vanilja/pienitarjoilukulho.jpg',
    price: 0
  },
  {
    name: 'Iso tarjoilukulho',
    diameter: 27,
    height: 13,
    pcs: 1,
    image: '/kuvat/vanilja/isotarjoilukulho.jpg',
    price: 0
  },
  {
    name: 'Laakea tarjoiluvati',
    diameter: 30,
    height: 7,
    pcs: 3,
    image: '/kuvat/vanilja/laakeakulho.jpg',
    price: 0
  },
  {
    name: 'Pieni piirakkavuoka / tarjoiluvati',
    diameter: 22,
    height: 6,
    pcs: 1,
    image: '/kuvat/vanilja/pienipiirakkavuoka.jpg',
    price: 0
  },
  {
    name: 'Piirakkavuoka / tarjoiluvati',
    diameter: 30,
    pcs: 2,
    image: '/kuvat/vanilja/isopiirakkavuoka.jpg',
    price: 0
  },
  {
    name: 'Korkea kulho',
    diameter: 30,
    pcs: 3,
    image: '/kuvat/vanilja/korkeakulho.jpg',
    price: 0
  },
  {
    name: 'Maljakko, sopii myös tarjoiluun',
    diameter: 20,
    height: 19,
    pcs: 4,
    image: '/kuvat/vanilja/maljakko.jpg',
    price: 0
  },
  {
    name: 'Kakkutarjotin',
    diameter: 28,
    height: 20,
    pcs: 1,
    image: '/kuvat/vanilja/kakkulautanen.jpg',
    price: 0
  },
  {
    name: 'Kynttilänjalka',
    pcs: 2,
    height: 10,
    image: '/kuvat/vanilja/kynttilajalka.jpg',
    price: 0
  }
]

const Vanilja = () => {
  return (
    <Layout
      pageTitle="Astiastot"
      content={
        <>
          <TablesetsNavigation selected="vanilja" />
          <div>
            <LeftContentImage
              url={'/kuvat/kahvikupit.jpg'}
              maxWidth={'450px'}
            />
            <h2 id="Vanilja">Pentik Vanilja</h2>
            <p>
              Pentikin omistajan, Anu Pentikin, suunnittelema Vanilija-sarja on
              jo klassikko. Suomalaiset rakastavat sarjaa sen persoonallisen
              muotoilun ja pintaa elävöittävän vaalean koristekuvion ansiosta.
              Tämä astiasarja sopii juhlaan kuin juhlaan. Lautasliinoilla,
              kukilla ja muilla somisteilla vaalea astiasto muuttaa muotoaan
              juhlan teeman mukaan.
            </p>
            <p>
              Meillä on tarjolla laaja setti, jolla katat pöydän tyylikkäästi
              niin kahvikekkereille kuin ruokavieraillekin.
            </p>
            <p>Astiat voi pestä tiskikoneessa.</p>

            <RentalItemsTable rentalItems={rentalItems} gapBeforeList={true} />
          </div>
        </>
      }
    />
  )
}

export default Vanilja
