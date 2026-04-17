import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { otherResolved } from '../../rentalItems/other'

const Index = () => {
  return (
    <Layout
      pageTitle="Muut"
      mediaImage="/kuvat/muut/karkkibuffet.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={otherResolved()} />}
    />
  )
}

export default Index
