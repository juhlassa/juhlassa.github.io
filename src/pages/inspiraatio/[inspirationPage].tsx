import type { GetStaticPaths, GetStaticProps } from 'next'
import InspirationTemplate from '../../components/InspirationTemplate'
import { InspirationPage, inspirationPages } from '../../inspirationPages'

export const getStaticPaths: GetStaticPaths = () => ({
  paths: Object.keys(inspirationPages).map((inspirationPage) => ({
    params: { inspirationPage }
  })),
  fallback: false
})

export const getStaticProps: GetStaticProps<InspirationPage> = ({
  params
}) => ({
  props: inspirationPages[params!.inspirationPage as string]
})

const Index = (props: InspirationPage) => <InspirationTemplate {...props} />

export default Index
