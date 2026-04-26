import { Layout } from '../../../components/Layout'
import { TablesetsNavigation } from '../../../components/TablesetsNavigation'
import { RentalItemsTable } from '../../../components/RentalItemsTable'
import { LeftContentImage } from '../../../components/ContentImage'
import { greenGateResolved } from '../../../rentalItems/greengate'

const Index = () => {
  return (
    <Layout
      pageTitle="Green Gate"
      description="Green Gate -astiat tuovat kattaukseen romanttista tunnelmaa yhdistettynä moderniin käytännöllisyyteen. Kauniit kukkakuosit, pehmeät sävyt ja yhdisteltävät designit tekevät sarjasta erityisesti nuorempien suosikin – täydellinen valinta näyttävään ja persoonalliseen kattaukseen."
      mediaImage="/kuvat/greengate.jpg"
      track={true}
      content={
        <>
          <TablesetsNavigation selected="greengate" />
          <div>
            <LeftContentImage
              url={'/kuvat/greengate.jpg'}
              alt={'Green Gate -astiastoa'}
              styles={{ maxWidth: '280px' }}
            />
            <p>
              Green Gate -astiat luovat kattaukseen ainutlaatuista tunnelmaa,
              jossa yhdistyvät romanttinen vintage-tyyli ja moderni
              käytännöllisyys.
            </p>
            <p>
              Tanskalainen merkki tunnetaan kauniisti kuvioiduista astioistaan,
              joiden pehmeät värit ja kukkakuosit ihastuttavat romantiikan
              ystäviä. Värejä ja kuoseja voi yhdistellä omien mieltymysten
              mukaan.
            </p>
            <p>
              Sarja on erityisesti nuorempien asiakkaiden mieleen, koska se
              yhdistää nykypäivän mukikulttuurin ja kauneuden. Lattekuppi on
              reilun kokoinen eikä sitä tarvitse olla koko ajan täyttämässä.
            </p>
            <p>
              Kun katat pöydän suloisilla Green Gate -astioilla, vieraiden
              huomio on taattu. Tätä sarjaa et helposti muualta löydä.
            </p>
            <p>Astiat voi pestä tiskikoneessa.</p>
          </div>
          <RentalItemsTable
            rentalItems={greenGateResolved()}
            gapBeforeList={true}
          />
        </>
      }
    />
  )
}

export default Index
