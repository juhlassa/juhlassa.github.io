import { RentalItemsTable } from '../../../components/RentalItemsTable'
import { Layout } from '../../../components/Layout'
import { TablesetsNavigation } from '../../../components/TablesetsNavigation'
import { LeftContentImage } from '../../../components/ContentImage'
import { rentalItemsByGroup } from '../../../rentalItems/allItems'

const groupName = 'Vanilja'
const items = rentalItemsByGroup(groupName)

const Index = () => {
  return (
    <Layout
      pageTitle={groupName}
      mediaImage="/kuvat/kahvikupit.jpg"
      track={true}
      content={
        <>
          <TablesetsNavigation selected="vanilja" />
          <div>
            <LeftContentImage
              url={'/kuvat/kahvikupit.jpg'}
              maxWidth={'450px'}
            />
            <h2 id="Vanilja">Pentik Vanilja</h2>
            <p>
              Pentikin omistajan, Anu Pentikin, suunnittelema Vanilija-sarja on
              jo klassikko. Suomalaiset rakastavat sarjaa sen persoonallisen
              muotoilun ja pintaa elävöittävän vaalean koristekuvion ansiosta.
              Tämä astiasarja sopii juhlaan kuin juhlaan. Lautasliinoilla,
              kukilla ja muilla somisteilla vaalea astiasto muuttaa muotoaan
              juhlan teeman mukaan.
            </p>
            <p>
              Meillä on tarjolla laaja setti, jolla katat pöydän tyylikkäästi
              niin kahvikekkereille kuin ruokavieraillekin.
            </p>
            <p>Astiat voi pestä tiskikoneessa.</p>
          </div>
          <RentalItemsTable rentalItems={items} gapBeforeList={true} />
        </>
      }
    />
  )
}

export default Index
