import Footer from 'components/Footer'
import Header from 'components/Header'
import { Title } from 'components/Title'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'

import LibraryGrid from '@/components/LibraryGrid'
import SearchBar from '@/components/SearchBar'

function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

async function getCategoryData(category) {
  try {
    const mod = await import(`data/library/${category}`)
    return mod.default
  } catch (err) {
    console.error(`Could not load data for category: ${category}`, err)
    return null // Return null to indicate failure
  }
}

const CategoryPage = () => {
  const router = useRouter()
  const { category } = router.query
  const [items, setItems] = useState([])
  const [allItems, setAllItems] = useState([]) // Aggiungi questo

  useEffect(() => {
    if (category) {
      getCategoryData(category).then((data) => {
        if (data) {
          setAllItems(data) // Imposta tutti gli elementi qui
          setItems(data)
        } else {
          router.replace('/404') // Programmatically navigate to the 404 page
        }
      })
    }
  }, [category, router])

  const handleSearch = (searchTerm) => {
    const filtered = allItems.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setItems(filtered)
  }

  if (!items) {
    return null // or a loading indicator
  }

  return (
    <div>
      <Header />
      <Title title={capitalize(category)} />
      <SearchBar onSearch={handleSearch} />
      <LibraryGrid docs={items} />
      <Footer />
    </div>
  )
}

export default CategoryPage
