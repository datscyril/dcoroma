// pages/[city]/index.tsx
import { Card } from 'components/Card'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { HomeTitle } from 'components/Title'
import { getCityData,listAllCities } from 'lib/cities'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// Function to get city data. This could also be an API call in a real app

export const getStaticPaths: GetStaticPaths = async () => {
  const cities = listAllCities()
  const paths = cities.map((city) => ({ params: { city } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const cityData = await getCityData(params.city)
  return { props: { cityData } }
}

const CityPage = ({ cityData }) => {
  const router = useRouter()
  const { city } = router.query
  return (
    <div>
      <Header />
      <div className="pb-20">
        <HomeTitle title={`Chiese di ${city}`} />
        <div className="flex flex-row flex-wrap justify-evenly">
          {cityData.map((church) => (
            <Card
              key={church.slug} // Assuming slug is unique
              title={church.name}
              imageUrl={church.imageUrl}
              href={`/churches/${city}/${church.slug}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CityPage
