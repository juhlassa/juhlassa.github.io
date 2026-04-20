import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { glassesResolved } from '../../rentalItems/glasses'

const Index = () => {
  return (
    <Layout
      pageTitle="Lasit"
      description="Vuokraa tyylikkäät juomalasit juhliin – valikoima kuohuviini- ja muita laseja viimeistelee kattauksen."
      mediaImage="/kuvat/lasit/kuohuviinilasit.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={glassesResolved()} />}
    />
  )
}

export default Index
