import React from "react";
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Card} from "../../components/card";

const CardHolder = ({children}) =>
    <div className='h-64 justify-center flex'>
        {children}
    </div>

const defaultProps = {
    height: '240px',
    width: '240px'
}

// TODO: make this dynamic
const carouselItems = [
    <CardHolder>
        <Card image='img/farmland.small.png'
              title='Card 1'
              {...defaultProps}
        >
            Body
        </Card>
    </CardHolder>,
    <CardHolder>
        <Card image='img/farmland.small.png'
              title='Card 2'
              {...defaultProps}
        >
            Body
        </Card>
    </CardHolder>,
    <CardHolder>
        <Card image='img/farmland.small.png'
              title='Card 3'
              {...defaultProps}
        >
            Body
        </Card>
    </CardHolder>,
    <CardHolder>
        <Card image='img/farmland.small.png'
              title='Card 4'
              {...defaultProps}
        >
            Body
        </Card>
    </CardHolder>,
]


export const FieldsCarousel = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1280: { items: 4 },
    };

    return (
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
    )
}
