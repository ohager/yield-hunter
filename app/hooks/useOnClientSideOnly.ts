import {useEffect} from "react";
import {isClientSide} from "../isClientSide";

export function useOnClientSideOnly(fn: Function){
    useEffect(() => {
        if(isClientSide){
            fn()
        }
    }, [])
}
