import { Layout } from './Layout'
import { InspirationItemsTable } from './InspirationItemsTable'

const InspirationTemplate = ({
  title,
  group,
  mediaImage,
  description
}: {
  title?: string
  group: string
  mediaImage?: string
  description?: string
}) => {
  return (
    <Layout
      showHeader={false}
      pageTitle={title ?? group}
      description={description}
      track={true}
      mediaImage={mediaImage}
      content={<InspirationItemsTable group={group} />}
    />
  )
}

export default InspirationTemplate
