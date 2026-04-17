import { RentalOrLinkedRentalItem } from '../types'
import { rentalItemsResolved } from './allItems'

export function decorating(): RentalOrLinkedRentalItem[] {
  return [
    {
      name: 'Kynttelikkö',
      height: 42,
      pcs: 3,
      image: '/kuvat/koristelu/kynttilajalka.jpg',
      price: 0
    },
    {
      name: 'Helmikoristeet',
      pcs: 1,
      unit: 'setti',
      description:
        'Viisi pientä kynttilämansettia ja neljä isoa helmikoristetta.',
      image: '/kuvat/koristelu/kynttelikko.jpg',
      price: 0
    },
    {
      name: 'Vaaleanpunaiset kynttilämansetit',
      pcs: 1,
      unit: 'setti',
      description: 'Viisi pientä kynttilämansettia.',
      image: '/kuvat/koristelu/kynttilamansetti_vaaleanpunainen.jpg',
      price: 0
    },
    {
      name: 'Vaaleanpunaiset kynttilämansetit',
      pcs: 1,
      unit: 'setti',
      description: 'Neljä kynttilämansettia ja yksi iso.',
      image: '/kuvat/koristelu/mansetti_vaaleanpunainen.jpg',
      price: 0
    },
    {
      name: 'Kynttiläjalka lasilla',
      height: 50,
      pcs: 1,
      image: '/kuvat/koristelu/kynttilajalka_lasilla.jpg',
      price: 0
    },
    {
      name: 'Enkelikynttiläjalka',
      height: 22,
      pcs: 1,
      description: 'Ristiäisiin, rippijuhliin yms.',
      image: '/kuvat/koristelu/enkelikynttilajalka.jpg',
      price: 0
    },
    {
      name: 'Kynttilälyhty, kirkas',
      brand: 'Perfect Home',
      height: 36,
      pcs: 2,
      image: '/kuvat/koristelu/kynttilalyhty_kirkas.jpg',
      price: 0
    },
    {
      name: 'Kynttilälyhty, utu',
      brand: 'Perfect Home',
      height: 25,
      pcs: 1,
      image: '/kuvat/koristelu/kynttilalyhty.jpg',
      price: 0
    },
    {
      name: 'Kynttiläastia, sydän',
      brand: 'Partylite',
      width: 8,
      height: 7,
      pcs: 15,
      image: '/kuvat/koristelu/sydantuikku.jpg',
      price: 0
    },
    { linked: 1 },
    {
      name: 'Kukkakranssi',
      brand: 'Finnmari',
      diameter: 33,
      material: 'muovi',
      pcs: 3,
      image: '/kuvat/koristelu/kranssi.jpg',
      price: 0
    },
    {
      name: 'Kukkakimppu',
      brand: 'Finnmari',
      length: 30,
      material: 'muovi',
      pcs: 3,
      image: '/kuvat/koristelu/kukkakimppu.jpg',
      price: 0
    },
    {
      name: 'Pallovalot',
      pcs: 1,
      description: 'Toimii verkkovirralla.',
      image: '/kuvat/koristelu/pallovalot_vaaleanpunainen.jpg',
      price: 0
    },
    {
      name: 'Pallovalot',
      pcs: 1,
      description: 'Toimii verkkovirralla.',
      image: '/kuvat/koristelu/pallovalot_valkoinen.jpg',
      price: 0
    },
    {
      name: 'Pallovalot',
      pcs: 3,
      description:
        'Toimii paristoilla (koko AA), paristot eivät kuulu vuokrahintaan.',
      image: '/kuvat/koristelu/punaiset_pallovalot.jpg',
      price: 0
    },
    {
      name: 'Sydänvalot',
      pcs: 3,
      description:
        'Toimii paristoilla (koko AA), paristot eivät kuulu vuokrahintaan.',
      image: '/kuvat/koristelu/sydanvalot.jpg',
      price: 0
    },
    {
      name: 'Valoputous',
      pcs: 8,
      description: 'Toimii verkkovirralla.',
      image: '/kuvat/koristelu/valoputous.jpg',
      price: 0
    },
    {
      name: 'Sydän&shy;koriste',
      diameter: 26,
      pcs: 1,
      image: '/kuvat/koristelu/sydankranssi.jpg',
      price: 0
    },
    {
      name: 'Sydänkranssi',
      diameter: 27,
      pcs: 1,
      image: '/kuvat/koristelu/punottu_sydankranssi.jpg',
      price: 0
    },
    {
      name: 'Sydäntaulu kirjaimilla',
      width: 30,
      height: 20,
      pcs: 1,
      image: '/kuvat/koristelu/sydantaulu-kirjaimilla.jpg',
      price: 0
    },
    {
      name: 'Sydännauha',
      length: 150,
      pcs: 3,
      image: '/kuvat/koristelu/sydannauha.jpg',
      price: 0
    },
    {
      name: 'Sydäntaulu valokuville, korteille yms.',
      width: 39,
      height: 50,
      pcs: 1,
      image: '/kuvat/koristelu/sydantaulu.jpg',
      price: 0
    },
    {
      name: 'Pieni sydänpidike, vaaleanpunainen',
      width: 27,
      height: 24,
      pcs: 1,
      image: '/kuvat/koristelu/sydantaulu_pieni.jpg',
      price: 0
    },
    {
      name: 'Sydänvalokoriste',
      height: 36,
      pcs: 1,
      image: '/kuvat/koristelu/sydanvalokoriste.jpg',
      price: 0
    },
    {
      name: 'Somiste',
      pcs: 1,
      width: 23,
      height: 12,
      image: '/kuvat/koristelu/love.jpg',
      price: 0
    },
    {
      name: 'Pöytänumerot 1&nbsp;-&nbsp;10',
      pcs: 1,
      height: 9,
      unit: 'setti',
      image: '/kuvat/koristelu/numerot.jpg',
      price: 0
    },
    {
      name: 'Tauluteline',
      width: 20,
      height: 30,
      pcs: 3,
      image: '/kuvat/koristelu/taulutelineet.jpg',
      price: 0
    },
    {
      name: 'Vihreä koristesetti',
      pcs: 1,
      unit: 'setti',
      description:
        'Sisältää yhden ison ja neljä pientä kynttilämansettia sekä koristeperhosia ja -kiteitä.',
      image: '/kuvat/koristelu/vihrea_koristesetti.jpg',
      price: 0
    }
  ]
}

export function decoratingResolved() {
  return rentalItemsResolved(decorating())
}
