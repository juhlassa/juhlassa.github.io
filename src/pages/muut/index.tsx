import { Layout } from '../../components/Layout'
import { type RentalItem } from '../../types'
import { RentalItemsTable } from '../../components/RentalItemsTable'

const rentalItems: RentalItem[] = [
  {
    name: 'Donitsibaari',
    pcs: 1,
    unit: 'setti',
    image: '/kuvat/muut/donitsitelineet.jpg',
    price: 0
  },
  {
    name: 'Karkkibuffet',
    pcs: 1,
    unit: 'setti',
    description:
      'Näyttävä karkkibuffet syntyy esimerkiksi Index-sarjan kulhoista. Voit koota niin laajan kokonaisuuden kuin haluat.',
    image: '/kuvat/muut/karkkibuffet.jpg',
    price: 0
  },
  {
    name: 'Paikka- tai tarjoilu&shy;infopidike',
    height: 5,
    pcs: 35,
    image: '/kuvat/muut/kylttipidike2.jpg',
    price: 0
  },
  {
    name: 'Paikka- tai tarjoilu&shy;infopidike',
    height: 12,
    pcs: 12,
    image: '/kuvat/muut/kylttipidike.jpg',
    price: 0
  },
  {
    name: 'Tarjoilupihdit',
    length: 12,
    pcs: 12,
    image: '/kuvat/muut/pinsetit.jpg',
    price: 0
  },
  {
    name: 'Pyöreä kakkukupu',
    brand: 'Tupperware',
    height: 18,
    diameter: 40,
    pcs: 2,
    image: '/kuvat/muut/pyorea_kakkukupu.jpg',
    price: 0
  },
  {
    name: 'Iso kakkukupu',
    brand: 'Tupperware',
    height: 16,
    width: 45,
    length: 29,
    pcs: 2,
    image: '/kuvat/muut/kakkukupu.jpg',
    price: 0
  },
  {
    name: 'Voileipä&shy;kakkukupu',
    brand: 'Tupperware',
    width: 40,
    length: 16,
    height: 18,
    pcs: 2,
    image: '/kuvat/muut/voileipakakkukupu.jpg',
    price: 0
  },
  {
    name: 'Sydäntaulu valokuville, korteille yms.',
    width: 39,
    height: 50,
    pcs: 1,
    image: '/kuvat/muut/sydantaulu.jpg',
    price: 0
  },
  {
    name: 'Pieni sydänpidike, vaaleanpunainen',
    width: 27,
    height: 24,
    pcs: 1,
    image: '/kuvat/muut/sydantaulu_pieni.jpg',
    price: 0
  },
  {
    name: 'Kynttiläastia, sydän',
    brand: 'Partylite',
    width: 8,
    height: 7,
    pcs: 15,
    image: '/kuvat/muut/sydantuikku.jpg',
    price: 0
  },
  {
    name: 'Sydänvalokoriste',
    height: 36,
    pcs: 1,
    image: '/kuvat/muut/sydanvalokoriste.jpg',
    price: 0
  },
  {
    name: 'Somiste',
    pcs: 1,
    width: 23,
    height: 12,
    image: '/kuvat/muut/love.jpg',
    price: 0
  },
  {
    name: 'Pöytänumerot 1&nbsp;-&nbsp;10',
    pcs: 1,
    height: 9,
    unit: 'setti',
    image: '/kuvat/muut/numerot.jpg',
    price: 0
  },
  {
    name: 'Ruusuköynnös esimerkiksi pöydälle, valokuvaseinään tai hääkaareen',
    length: 200,
    pcs: 1,
    image: '/kuvat/muut/ruusukoynnos.jpg',
    price: 0
  },
  {
    name: 'Valokuvausseinä',
    pcs: 1,
    image: '/kuvat/muut/valokuvausseina.jpg',
    price: 0
  },
  {
    name: '<a class="link" href="https://www.paljussa.fi/" target="_blank">Peräkärrypalju</a>',
    diameter: 180,
    height: 100,
    volume: 1500,
    description:
      'Noin kuudelle henkilölle. Alkaen 50 €/vrk. Ks. kaikki <a class="link underlined" href="https://www.paljussa.fi/hinnat" target="_blank">hinnat</a>.',
    pcs: 1,
    image: '/kuvat/muut/palju.jpg',
    price: 0
  }
]

const Index = () => {
  return (
    <Layout
      pageTitle="Muut"
      mediaImage="/kuvat/muut/karkkibuffet.jpg"
      track={true}
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

export default Index
