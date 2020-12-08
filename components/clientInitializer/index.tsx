import React from "react";
import {useOnClientSideOnly} from "../../utils/hooks/useOnClientSideOnly";

export const ClientInitializer = ({children}) => {

    useOnClientSideOnly(() => {
        console.log('Initializing client side code')
    })

    return children
}

