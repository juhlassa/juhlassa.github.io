import type { GetStaticPaths, GetStaticProps } from 'next'
import ItemPageTemplate from '../../../components/ItemPageTemplate'
import { ItemPage, itemPageParams, itemPages } from '../../../itemPages'

export const getStaticPaths: GetStaticPaths = () => ({
  paths: itemPageParams('/astiastot/').map(([, tableset, item]) => ({
    params: { tableset, item }
  })),
  fallback: false
})

export const getStaticProps: GetStaticProps<ItemPage> = ({ params }) => ({
  props: itemPages[`/astiastot/${params!.tableset}/${params!.item}/`]
})

const Index = (props: ItemPage) => <ItemPageTemplate {...props} />

export default Index
