//Component imports
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import NewsLetter from '../components/Newsletter'
import Showcase from '../components/Showcase'

//Style imports
import '../style/main.scss'

export default function Home(){
    return(
        <main className="main">
            <Header />
            <Banner screen={window.innerWidth >= 991 ? 'desktop' : 'mobile' }/>
            <div className="main__container">
                <Showcase />
            </div>
            <NewsLetter />
            <Footer />
        </main>
    )
}