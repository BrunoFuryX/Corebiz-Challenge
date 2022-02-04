import Slider from "react-slick";
import './style.scss'

export default function Banner(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return(
        <section className="fullbanner">
        {props.screen === 'desktop' && (
            <Slider {...settings}>
                <div>
                    <img src="/images/fullbannerDesktop.png" alt="Banner1"/>
                </div>
                <div>
                    <img src="/images/fullbannerDesktop.png" alt="Banner2"/>
                </div>
                <div>
                    <img src="/images/fullbannerDesktop.png" alt="Banner3"/>
                </div>
                <div>
                    <img src="/images/fullbannerDesktop.png" alt="Banner4"/>
                </div>
            </Slider>
        )}

        {props.screen === 'mobile' && (
            <Slider {...settings}>
                <div>
                    <img src="/images/fullbannerMobile.png" alt="Banner1"/>
                </div>
                <div>
                    <img src="/images/fullbannerMobile.png" alt="Banner2"/>
                </div>
                <div>
                    <img src="/images/fullbannerMobile.png" alt="Banner3"/>
                </div>
                <div>
                    <img src="/images/fullbannerMobile.png" alt="Banner4"/>
                </div>
        </Slider>
        )}  
        </section>
    );
}