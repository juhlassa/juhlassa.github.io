import { RentalOrLinkedRentalItem } from '../types'
import { rentalItemsResolved } from './allItems'

export function other(): RentalOrLinkedRentalItem[] {
  return [
    {
      id: 52,
      name: 'Donitsibaari',
      pcs: 1,
      unit: 'setti',
      image: '/kuvat/muut/donitsitelineet.jpg',
      price: 0
    },
    {
      id: 53,
      name: 'Karkkibuffet',
      pcs: 0,
      description:
        'Näyttävä karkkibuffet syntyy esimerkiksi <a class="link underlined" href="/astiastot/vanilja/">Vanilja</a>-sarjan kulhoista. Voit koota niin laajan kokonaisuuden kuin haluat.',
      image: '/kuvat/muut/karkkibuffet.jpg',
      price: 0
    },
    {
      id: 57,
      name: 'Pyöreä kakkukupu',
      brand: 'Tupperware',
      height: 18,
      diameter: 40,
      pcs: 2,
      image: '/kuvat/muut/pyorea_kakkukupu.jpg',
      price: 0
    },
    {
      id: 58,
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
      id: 59,
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
      name: 'Ruusuköynnös',
      length: 200,
      pcs: 1,
      description:
        'Sopii koristeeksi esimerkiksi pöydälle, valokuvaseinään tai hääkaareen',
      image: '/kuvat/muut/ruusukoynnos.jpg',
      price: 0
    },
    {
      id: 66,
      name: 'Valo&shy;kuvaus&shy;seinä',
      pcs: 1,
      image: '/kuvat/muut/valokuvausseina.jpg',
      price: 0
    },
    {
      id: 67,
      name: '<a class="link" href="https://www.paljussa.fi/" target="_blank">Peräkärrypalju</a>',
      diameter: 180,
      height: 100,
      volume: 1500,
      description:
        'Noin kuudelle henkilölle. Alkaen 50 €/vrk. Ks.&nbsp;kaikki <a class="link underlined" href="https://www.paljussa.fi/hinnat" target="_blank">hinnat</a>.',
      pcs: 1,
      image: '/kuvat/muut/palju.jpg',
      price: 0
    }
  ]
}

export function otherResolved() {
  return rentalItemsResolved(other())
}
