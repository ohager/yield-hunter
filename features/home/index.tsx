import React from "react";
import {Hero} from "../../components/hero";
import {Card} from "../../components/card";

const CardHolder = ({children}) =>
    <div className='h-64'>
        {children}
    </div>

export const Home = () => {

    return (
        <>
            <Hero bg='img/farmland.small.png'>
                <div className='cursor-pointer flex flex-row justify-evenly items-center h-full'>
                    <CardHolder>
                        <Card elevation="2xl"
                              image='img/farmland.small.png'
                              title='Card 1'
                        >
                            Body
                        </Card>
                    </CardHolder>
                    <CardHolder>
                        <Card elevation="2xl"
                              image='img/farmland.small.png'
                              title='Card 2'
                        >
                            Body
                        </Card>
                    </CardHolder>
                </div>
            </Hero>
        </>
    )

}
