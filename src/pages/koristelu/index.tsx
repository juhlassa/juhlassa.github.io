import { Layout } from '../../components/Layout'
import { RentalItemsTable } from '../../components/RentalItemsTable'

const group = 'Koristelu'

const Index = () => {
  return (
    <Layout
      pageTitle={group}
      description="Viimeistele juhla pienillä yksityiskohdilla – yksilölliset koristeet ja somisteet tuovat tyyliä ja tunnelmaa jokaiseen tilaisuuteen."
      mediaImage="/kuvat/koristelu/kynttilajalka.jpg"
      track={true}
      content={<RentalItemsTable group={group} />}
    />
  )
}

export default Index
