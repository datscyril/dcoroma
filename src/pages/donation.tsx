import type { NextPage } from 'next'

import Divider from '~/components/Divider'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import IbanComponent from '~/components/IbanComponent'
import Title from '~/components/Title'
import Verse from '~/components/Verse'

const Donation: NextPage = () => {
  return (
    <div>
      <Header />
      <Title title="Donazione" />
      <Verse />
      <Divider />
      <IbanComponent />
      <Footer />
    </div>
  )
}

export default Donation
