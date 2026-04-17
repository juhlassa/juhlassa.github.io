import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { decoratingResolved } from '../../rentalItems/decorating'

const Index = () => {
  return (
    <Layout
      pageTitle="Koristelu"
      mediaImage="/kuvat/koristelu/kynttilajalka.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={decoratingResolved()} />}
    />
  )
}

export default Index
