import { RentalItemsTable } from '../../../components/RentalItemsTable'
import { Layout } from '../../../components/Layout'
import { TablesetsNavigation } from '../../../components/TablesetsNavigation'
import { LeftContentImage } from '../../../components/ContentImage'
import { vaniljaResolved } from '../../../rentalItems/vanilja'

const Index = () => {
  return (
    <Layout
      pageTitle="Vanilja"
      description="Pentikin klassinen Vanilja-astiasto hurmaa ajattomalla muotoilullaan ja vaalealla koristeellaan. Monipuolinen ja muuntautuva sarja sopii juhlapöytään, ja laajalla setillä katat tyylikkäästi kaiken kahvihetkistä illallisiin."
      mediaImage="/kuvat/kahvikupit.jpg"
      track={true}
      content={
        <>
          <TablesetsNavigation selected="vanilja" />
          <div>
            <LeftContentImage
              className="size-xl"
              url={'/kuvat/kahvikupit.jpg'}
              alt={'Vanilja-kahvikupit'}
            />
            <p>
              Pentikin omistajan, Anu Pentikin, suunnittelema Vanilja-sarja on
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
          <RentalItemsTable
            rentalItems={vaniljaResolved()}
            gapBeforeList={true}
          />
        </>
      }
    />
  )
}

export default Index
