import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'

const group = 'Lasit'

const Index = () => {
  return (
    <Layout
      pageTitle={group}
      description="Vuokraa tyylikkäät juomalasit juhliin – valikoima kuohuviini- ja muita laseja viimeistelee kattauksen."
      mediaImage="/kuvat/lasit/kuohuviinilasit.jpg"
      track={true}
      content={<RentalItemsTable group={group} />}
    />
  )
}

export default Index
