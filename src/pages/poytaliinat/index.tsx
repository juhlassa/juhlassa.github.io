import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { rentalItemsByGroup } from '../../rentalItems/allItems'

const groupName = 'Pöytäliinat'
const items = rentalItemsByGroup(groupName)

const Index = () => {
  return (
    <Layout
      pageTitle={groupName}
      mediaImage="/kuvat/poytaliinat/poytaliina.jpg"
      track={true}
      content={
        <>
          <RentalItemsTable rentalItems={items} />
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
