import { RentalOrLinkedRentalItem } from '../types'
import { rentalItemsResolved } from './allItems'

export function serving(): RentalOrLinkedRentalItem[] {
  return [
    {
      name: 'Kerros&shy;tarjotin, 5&nbsp;kerrosta',
      brand: 'Riviera Maison',
      height: 87,
      description:
        'Kokonaisuutta voi muokata lisäämällä vain tarvittavat kerrokset',
      pcs: 1,
      image: '/kuvat/tarjoilu/kerrostarjotin5.jpg',
      price: 0
    },
    {
      name: 'Kerros&shy;tarjotin, 3&nbsp;kerrosta',
      brand: 'Riviera Maison',
      height: 72,
      pcs: 1,
      image: '/kuvat/tarjoilu/kerrostarjotin-riviera-3.jpg',
      price: 0
    },
    {
      name: 'Kerros&shy;tarjotin, 3&nbsp;kerrosta',
      brand: 'Affari of Sweden',
      height: 49,
      diameter: 28,
      pcs: 1,
      image: '/kuvat/tarjoilu/kerrostarjotin-affari-3.jpg',
      price: 0
    },
    {
      name: 'Kapea kerros&shy;tarjotin, 3&nbsp;kerrosta',
      height: 44,
      pcs: 1,
      image: '/kuvat/tarjoilu/pieni_kerrosvati3.jpg',
      price: 0
    },
    {
      name: 'Kerros&shy;tarjotin, 2&nbsp;kerrosta',
      brand: 'Riviera Maison',
      height: 46,
      pcs: 3,
      image: '/kuvat/tarjoilu/kerrostarjotin2.jpg',
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
      name: 'Peili&shy;tarjotin',
      width: 36,
      length: 32,
      pcs: 2,
      image: '/kuvat/tarjoilu/peilitarjotin.jpg',
      price: 0
    },
    {
      name: 'Sydän&shy;tarjotin',
      diameter: 17,
      pcs: 2,
      image: '/kuvat/tarjoilu/sydantarjotin.jpg',
      price: 0
    },
    {
      name: 'Kakku&shy;tarjotin',
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
      name: 'Hanallinen juoma-astia, 6.5&nbsp;l',
      volume: 6.5,
      diameter: 20,
      height: 30,
      pcs: 1,
      description: 'Sisältää telineen (korkeus mitattu ilman telinettä).',
      image: '/kuvat/tarjoilu/juoma-astia-6.jpg',
      price: 0
    },
    {
      name: 'Hanallinen juoma-astia, 5.5&nbsp;l',
      volume: 5.5,
      height: 62,
      image: '/kuvat/tarjoilu/juoma-astia-5.5.jpg',
      description:
        'Juoma-astiassa on irrallinen osa, jonka sisään voi laittaa esimerkiksi jääpaloja, kukkia tai pattereilla toimivat valot. Sisäastian tilavuus on 1.5 l.',
      pcs: 1,
      price: 0
    },
    {
      name: 'Hanallinen juoma-astia telineellä, 6&nbsp;l',
      volume: 6,
      diameter: 20,
      height: 32,
      pcs: 1,
      description: '(korkeus mitattu ilman telinettä).',
      image: '/kuvat/tarjoilu/juoma-astia-5.jpg',
      price: 0
    },
    {
      name: 'Hanallinen juoma-astia, 6&nbsp;l',
      volume: 6,
      height: 32,
      diameter: 20,
      pcs: 2,
      description: 'Ei telinettä.',
      image: '/kuvat/tarjoilu/juoma-astia-6-jalaton.jpg',
      price: 0
    },
    {
      name: 'Hanallinen juoma-astia, 4&nbsp;l',
      volume: 4,
      height: 26,
      width: 15,
      pcs: 1,
      description:
        'Ei telinettä. Kyljessä teksti "GLASSWARE Established 1898".',
      image: '/kuvat/tarjoilu/juoma-astia-4.jpg',
      price: 0
    },
    {
      name: 'Hanallinen juoma-astia, 3.8&nbsp;l',
      volume: 3.8,
      height: 32,
      diameter: 14,
      pcs: 1,
      description: 'Kyljessä teksti "QUALITY ~ Refreshing Ice Cold Drink".',
      image: '/kuvat/tarjoilu/juoma-astia-3.8.jpg',
      price: 0
    },
    {
      name: 'Hanallinen juoma-astia, 3&nbsp;l',
      volume: 3,
      height: 27,
      diameter: 14,
      pcs: 1,
      description: 'Kyljessä teksti "Hello SUMMER ENJOY THIS SEASON".',
      image: '/kuvat/tarjoilu/juoma-astia-3.jpg',
      price: 0
    },
    {
      name: 'Kannu',
      volume: 1.8,
      pcs: 1,
      image: '/kuvat/tarjoilu/kannu.jpg',
      price: 0
    },
    {
      name: 'Maitokannu',
      volume: 0.8,
      pcs: 1,
      image: '/kuvat/tarjoilu/maitokannu.jpg',
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
      name: '"Mariskooli" XXL, kirkas',
      height: 20,
      diameter: 20,
      pcs: 3,
      description:
        'Kuvattu oikeiden Mariskoolien vierellä koon hahmottamiseksi.',
      image: '/kuvat/tarjoilu/mariskoolit.jpg',
      price: 0
    },
    {
      name: 'Mariskooli, kirkas, iso',
      brand: 'Iittala',
      height: 15.5,
      diameter: 12,
      pcs: 12,
      image: '/kuvat/tarjoilu/mariskooli_kirkas_iso.jpg',
      price: 0
    },
    {
      name: 'Mariskooli, kirkas, pieni',
      brand: 'Iittala',
      height: 12,
      diameter: 9.5,
      pcs: 8,
      image: '/kuvat/tarjoilu/mariskooli_kirkas_pieni.jpg',
      price: 0
    },
    {
      name: 'Mariskooli, turkoosi, iso',
      brand: 'Iittala',
      height: 15.5,
      diameter: 12,
      pcs: 12,
      image: '/kuvat/tarjoilu/mariskooli_sininen_pieni.jpg',
      price: 0
    },
    {
      name: 'Mariskooli, turkoosi, pieni',
      brand: 'Iittala',
      height: 12,
      diameter: 9.5,
      pcs: 8,
      image: '/kuvat/tarjoilu/mariskooli_sininen_pieni.jpg',
      price: 0
    },
    {
      id: 1,
      name: 'Jäätelö- / jälki&shy;ruoka&shy;malja / maljakko',
      pcs: 26,
      image: '/kuvat/tarjoilu/jalkiruokalasi.jpg',
      description: 'Sopii myös pöytä&shy;koriste&shy;asetelmiin.',
      price: 0
    },
    {
      name: 'Jalallinen kakkutarjotin',
      brand: 'Tupperware',
      diameter: 30,
      height: 11,
      pcs: 3,
      material: 'elin&shy;tarvike&shy;muovi',
      image: '/kuvat/tarjoilu/jalallinen_kakkutarjotin.jpg',
      price: 0
    },
    {
      name: 'Paikka- tai tarjoilu&shy;info&shy;pidike',
      height: 5,
      pcs: 35,
      image: '/kuvat/tarjoilu/kylttipidike2.jpg',
      price: 0
    },
    {
      name: 'Paikka- tai tarjoilu&shy;info&shy;pidike',
      height: 12,
      pcs: 12,
      image: '/kuvat/tarjoilu/kylttipidike.jpg',
      price: 0
    },
    {
      name: 'Tarjoilupihdit',
      length: 12,
      pcs: 18,
      image: '/kuvat/tarjoilu/pinsetit.jpg',
      price: 0
    },
    {
      id: 2,
      name: 'Kahvilusikat',
      pcs: 40,
      image: '/kuvat/tarjoilu/lusikat.jpg',
      price: 0
    },
    {
      name: 'Juustotarjotin',
      diameter: 25,
      pcs: 3,
      image: '/kuvat/tarjoilu/juustotarjotin.jpg',
      price: 0
    }
  ]
}

export function servingResolved() {
  return rentalItemsResolved(serving())
}
