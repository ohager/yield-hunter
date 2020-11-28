import React from "react";
import {Hero} from "../../components/hero";
import {Card} from "../../components/card";
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const CardHolder = ({children}) =>
    <div className='h-64 justify-center flex'>
        {children}
    </div>

const carouselItems = [
    <CardHolder>
        <Card elevation="2xl"
              image='img/farmland.small.png'
              title='Card 1'
        >
            Body
        </Card>
    </CardHolder>,
    <CardHolder>
        <Card elevation="2xl"
              image='img/farmland.small.png'
              title='Card 2'
        >
            Body
        </Card>
    </CardHolder>,
    <CardHolder>
        <Card elevation="2xl"
              image='img/farmland.small.png'
              title='Card 3'
        >
            Body
        </Card>
    </CardHolder>,
    <CardHolder>
        <Card elevation="2xl"
              image='img/farmland.small.png'
              title='Card 4'
        >
            Body
        </Card>
    </CardHolder>,
]

export const Home = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 4 },
    };


    return (
        <>
            <Hero bg='img/farmland.small.png'>
                <div className='flex items-center h-full'>
                    <Carousel
                        items={carouselItems}
                        responsive={responsive}
                        autoPlayInterval={5000}
                        disableDotsControls
                        disableButtonsControls
                        touchTracking={false}
                        autoPlay
                        infinite
                    >
                    </Carousel>
                </div>
            </Hero>
        </>
    )

}
