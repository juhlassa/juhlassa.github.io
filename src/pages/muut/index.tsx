import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'

const group = 'Muut'

const Index = () => {
  return (
    <Layout
      pageTitle={group}
      description="Muut vuokrattavat tuotteet juhliin ja tilaisuuksiin – löydä täydentävät tarvikkeet helposti samasta paikasta."
      mediaImage="/kuvat/muut/karkkibuffet.jpg"
      track={true}
      content={<RentalItemsTable group={group} />}
    />
  )
}

export default Index
