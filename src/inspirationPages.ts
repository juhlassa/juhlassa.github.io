export type InspirationPage = {
  group: string
  mediaImage: string
  title?: string
}

// Keys are URL slugs under /inspiraatio/
export const inspirationPages: Record<string, InspirationPage> = {
  donitsibaari: {
    group: 'Donitsibaari',
    mediaImage: '/kuvat/muut/donitsiteline.jpg'
  },
  ilmapallopumppu: {
    group: 'Ilmapallopumppu',
    mediaImage: '/kuvat/muut/ilmapallopumppu.jpg'
  },
  'juoma-astia': {
    group: 'Hanallinen juoma-astia',
    mediaImage: '/kuvat/tarjoilu/juoma-astia_5.5.jpg'
  },
  'juoma-astia-pieni': {
    title: 'Hanallinen juoma-astia, 3.8 l',
    group: 'Hanallinen juoma-astia, pieni',
    mediaImage: '/kuvat/tarjoilu/juoma-astia_3.8.jpg'
  },
  'juoma-astia-suuri': {
    group: 'Hanallinen juoma-astia, suuri',
    mediaImage: '/kuvat/tarjoilu/juoma-astia_5.5.jpg'
  },
  kakkukupu: {
    group: 'Iso kakkukupu',
    mediaImage: '/kuvat/muut/kakkukupu.jpg'
  },
  kapea_kerrostarjotin: {
    group: 'Kapea kerrostarjotin',
    mediaImage: '/kuvat/tarjoilu/kapea_kerrostarjotin_3.jpg'
  },
  kerrostarjotin: {
    group: 'Kerrostarjotin',
    mediaImage: '/kuvat/tarjoilu/kerrostarjotin_riviera_3.jpg'
  },
  kukkaseina: {
    group: 'Kukkaseinä',
    mediaImage: '/kuvat/muut/kukkaseina.jpg'
  },
  kuohuviinilasit: {
    group: 'Kuohuviinilasit',
    mediaImage: '/kuvat/lasit/kuohuviinilasit.jpg'
  },
  lasikerrostarjotin: {
    group: 'Lasikerrostarjotin',
    mediaImage: '/kuvat/tarjoilu/kerrostarjotin_3_lasi.jpg'
  },
  minikerrostarjotin: {
    group: 'Minikerrostarjotin',
    mediaImage: '/kuvat/tarjoilu/kerrostarjotin_pieni_2.jpg'
  },
  peilitarjotin: {
    group: 'Peilitarjotin',
    mediaImage: '/kuvat/tarjoilu/peilitarjotin.jpg'
  },
  'pieni-kerrostarjotin': {
    group: 'Pieni kerrostarjotin',
    mediaImage: '/kuvat/tarjoilu/kerrostarjotin_2.jpg'
  },
  poytaliinat: {
    group: 'Pöytäliinat',
    mediaImage: '/kuvat/muut/poytaliina.jpg'
  },
  rullattava_kukkaseina: {
    group: 'Rullattava kukkaseinä',
    mediaImage: '/kuvat/muut/rullattava_kukkaseina.jpg'
  },
  sydankynttilateline: {
    group: 'Sydänkynttiläteline',
    mediaImage: '/kuvat/koristelu/sydankynttilateline.jpg'
  },
  sydansomiste: {
    group: 'Sydänsomiste',
    mediaImage: '/kuvat/koristelu/sydansomiste.jpg'
  },
  tarjotin: {
    group: 'Suorakulmainen tarjotin',
    mediaImage: '/kuvat/tarjoilu/tarjotin.jpg'
  },
  valokuvausseina: {
    group: 'Valokuvausseinä / Hääkaari',
    mediaImage: '/kuvat/muut/valokuvausseina.jpg'
  }
}
