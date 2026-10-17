import type { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { RentalItemsTable } from '../components/RentalItemsTable'
import { CategoryPage, categoryPages } from '../categoryPages'

export const getStaticPaths: GetStaticPaths = () => ({
  paths: Object.keys(categoryPages).map((category) => ({
    params: { category }
  })),
  fallback: false
})

export const getStaticProps: GetStaticProps<CategoryPage> = ({ params }) => ({
  props: categoryPages[params!.category as string]
})

const Index = ({ group, description, mediaImage }: CategoryPage) => {
  return (
    <Layout
      pageTitle={group}
      description={description}
      mediaImage={mediaImage}
      track={true}
      content={<RentalItemsTable group={group} />}
    />
  )
}

export default Index
