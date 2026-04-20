import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { otherResolved } from '../../rentalItems/other'

const Index = () => {
  return (
    <Layout
      pageTitle="Muut"
      description="Muut vuokrattavat tuotteet juhliin ja tilaisuuksiin – löydä täydentävät tarvikkeet helposti samasta paikasta."
      mediaImage="/kuvat/muut/karkkibuffet.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={otherResolved()} />}
    />
  )
}

export default Index
