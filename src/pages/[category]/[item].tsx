import type { GetStaticPaths, GetStaticProps } from 'next'
import ItemPageTemplate from '../../components/ItemPageTemplate'
import { categoryPages } from '../../categoryPages'
import { ItemPage, itemPageParams, itemPages } from '../../itemPages'

export const getStaticPaths: GetStaticPaths = () => ({
  paths: Object.keys(categoryPages).flatMap((category) =>
    itemPageParams(`/${category}/`).map(([, item]) => ({
      params: { category, item }
    }))
  ),
  fallback: false
})

export const getStaticProps: GetStaticProps<ItemPage> = ({ params }) => ({
  props: itemPages[`/${params!.category}/${params!.item}/`]
})

const Index = (props: ItemPage) => <ItemPageTemplate {...props} />

export default Index
