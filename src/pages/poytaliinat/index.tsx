import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { tableClothingsResolved } from '../../rentalItems/tableClothings'

const Index = () => {
  return (
    <Layout
      pageTitle="Pöytäliinat"
      description="Viimeistele juhlapöytä pöytäliinoilla – vuokraa helppohoitoiset liinat helposti eri tilaisuuksiin ja kattauksiin."
      mediaImage="/kuvat/poytaliinat/poytaliina.jpg"
      track={true}
      content={
        <>
          <RentalItemsTable rentalItems={tableClothingsResolved()} />
          <div className="gap-before">
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
