import { Layout } from './Layout'
import { InspirationItemsTable } from './InspirationItemsTable'

const InspirationTemplate = ({
  group,
  mediaImage,
  description
}: {
  group: string
  mediaImage?: string
  description?: string
}) => {
  return (
    <Layout
      showHeader={false}
      pageTitle={group}
      description={description}
      track={true}
      mediaImage={mediaImage}
      content={<InspirationItemsTable group={group} />}
    />
  )
}

export default InspirationTemplate
