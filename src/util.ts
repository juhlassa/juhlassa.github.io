export const basicInfo = {
  businessName: 'Pramiat vadit',
  baseUrl: 'https://pramiatvadit.fi',
  logo: '/kuvat/pramiatvadit.jpg',
  address: 'Leinikintie 12, Ilmajoki',
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.8203661954478!2d22.551243777720092!3d62.73406157643844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4687cfea53f8b9c1%3A0xb1b9c7a82e65f7eb!2sLeinikintie%2012%2C%2060800%20Ilmajoki!5e0!3m2!1sfi!2sfi!4v1775940388221!5m2!1sfi!2sfi',
  areasServed: ['Ilmajoki', 'Seinäjoki', 'Etelä-Pohjanmaa'],
  email: 'pramiatvadit@gmail.com',
  telephone: '040 524 2071',
  vatNumber: '2615399-6',
  keywords:
    'pramiatvadit astiavuokraus astiavuokraamo vuokra-astiat juhlavuokraus juhlat ilmajoki seinäjoki etelä-pohjanmaa virpi kupiainen',
  slogan: 'Vuokraa. Juhli. Palauta.',
  gtagId: 'G-Y0E9FK86YP'
}

export function humanReadableName(name?: string) {
  return name?.replace(/&shy;/g, '').replace(/&nbsp;/g, ' ')
}

export function trackEvent(event: string, ...params: unknown[]) {
  if (window.gtag) {
    window.gtag('event', event, params)
  }
}
