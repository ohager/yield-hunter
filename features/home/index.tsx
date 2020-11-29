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
            <Avatar name='ohager' badge="lord"/>
            <Avatar name='frank' badge="patron"/>
            <Avatar name='jjos'/>
        </>
    )
}
