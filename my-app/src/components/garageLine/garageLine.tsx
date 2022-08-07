import { useEffect } from "react";
import { getCars } from "../garage/garage";
import { ICar, TCars } from "../types/types";
import CarInstance from "./carInstance";

export default function GarageLine(props: {s: { cars: Array<ICar>, XTotalCount: number}, p: number}){
    const state= props.s;
    const page = props.p;

    return (
        <div>
             <h1>Garage({state.XTotalCount})</h1>
             <h2>Page #{page}</h2>
            {state.cars.map((el: { name: string; color: string; id: number; }) =>  <CarInstance name={el.name} color={el.color} id={el.id} key={el.id}/>)}
        </div>
       
    )
}
//(props: {state: { cars: Array<ICar>, XTotalCount: number, page: number}, page: {number}})

