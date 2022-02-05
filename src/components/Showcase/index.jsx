import ShowcaseItems from './ShowcaseItems'

import './style.scss'

export default function Showcase(props){
    var title = props.title

    return(
        <section className="showcase">
            <div className="showcase__container">
                <div className="showcase__header">
                    <h3>{ title }</h3>
                </div>
                <ShowcaseItems />
            </div>
        </section>
    )
}