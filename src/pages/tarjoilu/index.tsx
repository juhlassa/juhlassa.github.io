import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { servingResolved } from '../../rentalItems/serving'

const Index = () => {
  return (
    <Layout
      pageTitle="Tarjoilu"
      description="Vuokraa tarjoiluastiat ja -tarvikkeet helposti juhliin ja tilaisuuksiin – ylelliset kerrostarjoittimet ja muut tarjoiluastiat tekevät kattauksesta näyttävän."
      mediaImage="/kuvat/tarjoilu/mariskooli_kirkas_pieni.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={servingResolved()} />}
    />
  )
}

export default Index
