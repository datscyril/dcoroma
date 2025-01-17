// pages/[city]/[slug].js
import { ChurchDetail } from 'components/ChurchDetail'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { getAllChurchSlugs, getChurchData } from 'lib/cities'
import { GetStaticPaths, GetStaticProps } from 'next'

import Error404 from '@/components/NotFoundPage'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllChurchSlugs() // [{ params: { city: 'roma', slug: 'san-pietro' } }, ...]
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const churchData = await getChurchData(params.city, params.slug)
  if (!churchData) {
    return { notFound: true }
  }
  return { props: { church: churchData }, revalidate: 1 }
}

const ChurchPage = ({ church }) => {
  if (!church) {
    return <Error404 />
  }
  return (
    <div>
      <Header />
      <ChurchDetail churchData={church} />
      <Footer />
    </div>
  )
}

export default ChurchPage
