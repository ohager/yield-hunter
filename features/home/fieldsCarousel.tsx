import React from "react";
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Card} from "../../components/card";
import {FarmCard} from "../../components/farmCard";
import {FarmDataSimple} from "../../types/FarmDataSimple";
import {BurstValue} from "@burstjs/util";

const CardHolder = ({children}) =>
    <div className='h-64 justify-center flex'>
        {children}
    </div>

const defaultProps = {
    height: '240px',
    width: '240px'
}


const farmData: FarmDataSimple = {
    currentFarmValue: BurstValue.fromBurst(1200),
    farmers: [
        'BURST-RN82-8TLT-3WB4-G4PLJ',
        'BURST-C2G7-6X2S-FDPF-2TJP2',
        'BURST-PBD4-SRG4-XZNL-A9KR3'
    ],
    patron: 'BURST-D55E-8EVV-8YHH-5XXNL',
    patronLevel: BurstValue.fromBurst(2500),
    farmingPower: BurstValue.fromBurst(200),
    lordInvestments: BurstValue.fromBurst(50000),
    lords: [
        'BURST-RN82-8TLT-3WB4-G4PLJ',
        'BURST-C2G7-6X2S-FDPF-2TJP2',
        'BURST-PBD4-SRG4-XZNL-A9KR3',
    ]
}


// TODO: make this dynamic
const carouselItems = [
    <FarmCard data={farmData}/>,
    <FarmCard data={farmData}/>,
    <FarmCard data={farmData}/>,
    <FarmCard data={farmData}/>,
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
            autoPlayInterval={3000}
            disableDotsControls
            disableButtonsControls
            touchTracking={false}
            autoPlay
            infinite
        >
        </Carousel>
    )
}
