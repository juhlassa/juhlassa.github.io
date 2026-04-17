import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { servingResolved } from '../../rentalItems/serving'

const Index = () => {
  return (
    <Layout
      pageTitle="Tarjoilu"
      mediaImage="/kuvat/tarjoilu/mariskooli_kirkas_pieni.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={servingResolved()} />}
    />
  )
}

export default Index
