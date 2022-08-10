import { Card } from '../../../components/Card';
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { HomeTitle } from '../../../components/Title';
import torino from '../../../data/churches/torino.js'

export default function Torino() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Torino" />
                <div className="flex flex-row flex-wrap justify-evenly">
                  {torino.filter(church => church.href).map((church) => (
                    <Card key={church.name} title={church.name} imageUrl={church.imageUrl} href={church.href}/>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}