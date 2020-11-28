import React from "react";
import {Hero} from "../../components/hero";
import {Card} from "../../components/card";

export const Home = () => {

    return (
        <>
            <Hero bg='img/farmland.small.png'>
                <div className='cursor-pointer p-4' style={{height: '320px'}}>
                    <Card elevation="2xl"
                          image='img/farmland.small.png'
                          title='Test'
                    >
                        Some Text
                    </Card>
                </div>
            </Hero>
        </>
    )

}
