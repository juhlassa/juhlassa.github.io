import { Layout } from '../../../components/Layout'
import { TablesetsNavigation } from '../../../components/TablesetsNavigation'
import { RentalItemsTable } from '../../../components/RentalItemsTable'
import type { RentalItem } from '../../../types'
import { ContentImage } from '../../../components/ContentImage'
import { rentalItemsByGroup } from '../../../rentalItems/allItems'

const groupName = 'Green Gate'
const items = rentalItemsByGroup(groupName)

const Index = () => {
  return (
    <Layout
      pageTitle={groupName}
      mediaImage="/kuvat/greengate.jpg"
      track={true}
      content={
        <>
          <TablesetsNavigation selected="greengate" />
          <div>
            <ContentImage
              url={'/kuvat/greengate.jpg'}
              float={'left'}
              maxWidth={'280px'}
            />
            <h2>Green Gate</h2>
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
              huomio on taattu. Tätä sarjaa et helposti muualta löydä.{' '}
            </p>
          </div>
          <RentalItemsTable rentalItems={items} gapBeforeList={true} />
        </>
      }
    />
  )
}

export default Index
