import { Layout } from '../../components/Layout'
import type { RentalItem } from '../../types'
import { RentalItemsTable } from '../../components/RentalItemsTable'

const rentalItems: RentalItem[] = [
  {
    name: 'Pöytäliina, valkoinen',
    width: 145,
    length: 240,
    pcs: 10,
    material: 'polyesteri',
    image: '/kuvat/poytaliinat/poytaliina.jpg',
    price: 0
  }
]

const Index = () => {
  return (
    <Layout
      pageTitle="Pöytäliinat"
      content={
        <>
          <div>
            <RentalItemsTable rentalItems={rentalItems} />
          </div>
          <div>
            <p>
              Pöytäliinat luovutetaan ja palautetaan pestynä ja viikattuna.
              Koska jokaisella on omat vaatimukset silityksen laadulle,
              vuokraaja saa silittää liinat niin hyvin kuin haluaa.
              Suosittelemme ennen käyttöä pesemään liinat ja laittamaan ne
              narulle kuivumaan. Tämä suoristaa liinaa ja helpottaa
              silittämistä.
            </p>
          </div>
        </>
      }
    />
  )
}

export default Index
