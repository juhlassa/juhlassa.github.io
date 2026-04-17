import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { rentalItemsByGroup } from '../../rentalItems/allItems'

const groupName = 'Lasit'
const items = rentalItemsByGroup(groupName)

const Index = () => {
  return (
    <Layout
      pageTitle={groupName}
      mediaImage="/kuvat/lasit/kuohuviinilasit.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={items} />}
    />
  )
}

export default Index
