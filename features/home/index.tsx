import React from "react";
import {Hero} from "../../components/hero";
import {FieldsCarousel} from "./fieldsCarousel";
import {Avatar} from "../../components/avatar";

export const Home = () => {
    return (
        <>
            <Hero bg='img/farmland.small.png'>
                <div className='flex items-center h-full'>
                    <FieldsCarousel/>
                </div>
            </Hero>
            <Avatar name='ohager' size='xl'/>
            <Avatar name='frank' size='xl'/>
            <Avatar name='jjos' size='xl'/>
        </>
    )
}
