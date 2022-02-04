import Header from '../components/Header'
import Banner from '../components/Banner'

import '../style/main.scss'
export default function Home(){
    return(
        <main className="main">
                <Header />
                <Banner screen={window.innerWidth >= 991 ? 'desktop' : 'mobile' }/>
            <div className="main__container">
                {/* aqui vai a Showcase */}
            </div>
            {/* aqui vai a Newsletter */}
            {/* aqui vai o Footer */}
        </main>
    )
}