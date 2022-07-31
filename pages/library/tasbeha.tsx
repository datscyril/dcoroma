import type { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Title } from '../../components/Title'
import LibraryTables from '../../components/LibraryTable'

const documents = [
  {name: 'Agpeya', description: 'this is the book of our prayers', href: '/files/agpeya.pdf'},
  {name: 'Agpeya', description: 'this is the book of our prayers', href: '/files/agpeya.pdf'},
  {name: 'Agpeya', description: 'this is the book of our prayers', href: '/files/agpeya.pdf'},
  {name: 'Agpeya', description: 'this is the book of our prayers', href: '/files/agpeya.pdf'},
  {name: 'Agpeya', description: 'this is the book of our prayers', href: '/files/agpeya.pdf'},
  // More documents...
]

const Tasbeha: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Tasbeha" />
      <LibraryTables docs={documents}/>
      <Footer />
    </div>
  )
}

export default Tasbeha