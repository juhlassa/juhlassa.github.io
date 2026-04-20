import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'
import { decoratingResolved } from '../../rentalItems/decorating'

const Index = () => {
  return (
    <Layout
      pageTitle="Koristelu"
      description="Viimeistele juhla pienillä yksityiskohdilla – yksilölliset koristeet ja somisteet tuovat tyyliä ja tunnelmaa jokaiseen tilaisuuteen."
      mediaImage="/kuvat/koristelu/kynttilajalka.jpg"
      track={true}
      content={<RentalItemsTable rentalItems={decoratingResolved()} />}
    />
  )
}

export default Index
