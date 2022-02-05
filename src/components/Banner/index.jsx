import React, { useState, useLayoutEffect } from 'react'

import Slider from "react-slick";
import './style.scss'

export default function Banner(props){

    const [mobile, setMobile] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    useLayoutEffect(() => {
        function updateSize() {
            setMobile(window.innerWidth >= 991 ? 0 : 1);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return(
        <section className="fullbanner">
            <Slider {...settings}>
                <div>
                    <img src={ mobile ? "/images/fullbannerMobile.png" : "/images/fullbannerDesktop.png" } alt="Banner1"/>
                </div>
                <div>
                    <img src={ mobile ? "/images/fullbannerMobile.png" : "/images/fullbannerDesktop.png" } alt="Banner2"/>
                </div>
                <div>
                    <img src={ mobile ? "/images/fullbannerMobile.png" : "/images/fullbannerDesktop.png" } alt="Banner3"/>
                </div>
                <div>
                    <img src={ mobile ? "/images/fullbannerMobile.png" : "/images/fullbannerDesktop.png" } alt="Banner4"/>
                </div>
            </Slider>
        </section>
    );
}