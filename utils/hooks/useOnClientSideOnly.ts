import {useEffect} from "react";
import {runClientSideOnly} from "../runClientSideOnly";

export function useOnClientSideOnly(fn: Function){
    useEffect(runClientSideOnly(fn))
}
