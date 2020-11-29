import React from "react";
import {Hero} from "../../components/hero";
import {FieldsCarousel} from "./fieldsCarousel";
import {Avatar} from "../../components/avatar";
import {InfoBox} from "./infoBox";
import {FarmCard} from "../../components/farmCard";
import {FarmDataSimple} from "../../types/FarmDataSimple";
import {BurstValue} from "@burstjs/util";


export const Home = () => {
    return (
        <>
            <Hero bg='img/farmland.small.png'>
                <div className='relative flex items-center h-full'>
                    <FieldsCarousel/>
                    <InfoBox>
                        Best Farmers
                        <Avatar name='ohager' badge="lord"/>
                        <Avatar name='frank' badge="patron"/>
                        <Avatar name='jjos'/>
                    </InfoBox>
                </div>
            </Hero>

        </>
    )
}
