import type { GetStaticPaths, GetStaticProps } from 'next'
import InspirationTemplate from '../../components/InspirationTemplate'
import { inspirationMediaImage } from '../../inspirationItems'
import { inspirationPages } from '../../inspirationPages.ts'

type InspirationPageProps = { group: string; mediaImage?: string }

export const getStaticPaths: GetStaticPaths = () => ({
  paths: Object.keys(inspirationPages).map((inspirationPage) => ({
    params: { inspirationPage }
  })),
  fallback: false
})

export const getStaticProps: GetStaticProps<InspirationPageProps> = ({
  params
}) => {
  const group = inspirationPages[params!.inspirationPage as string]
  const mediaImage = inspirationMediaImage(group)
  // Page props can't contain undefined
  return { props: { group, ...(mediaImage && { mediaImage }) } }
}

const Index = (props: InspirationPageProps) => (
  <InspirationTemplate {...props} />
)

export default Index
