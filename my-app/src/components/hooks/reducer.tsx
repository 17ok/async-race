
import { Endpoints } from "../../helpers/url";
import { ICar } from "../types/types";
//export const MyContext = React.createContext();

export const initialState = {
    cars: [],
    currentCarId: '',
    currentPage: 1,
    currentPageCars: [],
    maxCars: [],
    winners: [],
    velocity: {},
    XTotalCount: ''
}

/*
export function reducer(state: any, action: { type: any; }){
    switch(action?.type){
        case 'getCars':
            const carsArray = async function generateCars(){
                const response = await fetch(garageURL);
                return ( await response.json())
            };
            return { ...state, cars: carsArray}
           

        /*
            return {
                ...state, cars: generateCars()
            };
        default: throw new Error();
            }

    
    }*/


/*export async function generateCars(){
    const response = await fetch(garageURL);
    return ( await response.json())
};*/

/*export async function generateCars(): Promise<TCars> {
    const response = await fetch(garageURL);
    const data = await response.json();
    console.log("data", data)
    return data;
}*/

export async function getCar(id: number): Promise<ICar>{
     const response = await fetch(Endpoints.GARAGE)
     .then(response => response.json())
      return(
        response
      ) 
};
/*
export async function raceCars(): Promise<IWinner>{
    const response = await fetch(`${garageURL}${id}`)
     return(
       await response.json()
     ) 
};
*/
