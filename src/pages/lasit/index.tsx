import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { glassesResolved } from '../../rentalItems/glasses'

const Index = () => {
  return (
    <Layout
      pageTitle="Lasit"
      mediaImage="/kuvat/lasit/kuohuviinilasit.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={glassesResolved()} />}
    />
  )
}

export default Index
