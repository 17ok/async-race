import GarageLine from "../garageLine/garageLine";
import Create from "../carOptions/create";
import Generate from "../allCarControls/generate";
import Race from "../allCarControls/race";
import Reset from "../allCarControls/reset";
import Update from "../carOptions/update";
import { AllCarControls, CarOptions, GarageContainer } from "./styles";
import { useEffect, useReducer, useState } from "react";
import randomCarsArray from "../../helpers/randomCar"

import { ICar, IState, TCars } from "../types/types";
import { Endpoints } from "../../helpers/url";
import randomColor from "../../helpers/randomCarColor";
import CarInstance from "../garageLine/carInstance";
import PagesControls from "../pages/pagesControls";

export async function getCars(page: number){ 
    try{
        const response = await fetch(`${Endpoints.GARAGE}/?_page=${page}&_limit=7`);
        const XTotalCount = response.headers.get('X-Total-Count');
        const pageCars = await response.json();
        return{
            pageCars,
            XTotalCount
        }
    } catch(error) {
        throw new Error("Error in getCars");
    }
}

export function Garage() {

    const initialState = {
        cars: [],
        currentCarId: '',
        currentPage: 1,
        currentPageCars: [],
        maxCars: [],
        winners: [],
        velocity: {},
        XTotalCount: 1,
        //page: 1
    };
    
    const [state, setState] = useState(initialState);
    const [page, setPage] = useState(1)
  //  const [carState, setCarState] = useState([]) ;
   
  useEffect(() => {  getCars(page).then((result) => setState({...state,cars: result.pageCars, XTotalCount: Number(result.XTotalCount)}))
}, []);

useEffect(() => {setPage(page)}, [])
console.log(state.cars)

  /*useEffect(() => {
     getCars(1)
    }, [])*/
 
    //const[state, dispatch] = useReducer(reducer, initialState);



    /*    fetch(`${Endpoints.GARAGE}/?_page=${page}&_limit=7`)
        .then(response =>  response.json())
        .then(response => setState({ ...state, cars: response, XTotalCount: response.length}))
*/
   
/*
function get2Cars(){ 
    fetch(Endpoints.GARAGE, {method: 'GET'})
    .then(response =>  response.json())
    .then(response => setCarState(response))
    .catch( (error: ErrorOptions | undefined) => {throw new Error("Error in car generation", error)})
}*/


 /*function generateCars(): void {
    const array = randomCarsArray();
    array.forEach((el) => {
        fetch(Endpoints.GARAGE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify({
                name: el,
                color: randomColor()})
            })
    })
    .then(getCars)
    .catch( (error: ErrorOptions | undefined) => {throw new Error("Error in car generation", error)})
}*/


function nextPage() {
   setPage(page + 1)
}

function previousPage() {
    if (page>1){
    setPage(page - 1)
    }
}

    return(
        <GarageContainer>
            <CarOptions>
               <div>
               <Create/>
                </div>
                <div>
                <Update/>
                </div>
            </CarOptions>
            <AllCarControls>
                <button>race</button>
                <button>reset</button>
                <button>generate</button>
                <Race/>
                <Reset/>
                <Generate/>
            </AllCarControls>
            <div>
                <button onClick={previousPage}>previous</button>
                <button onClick={nextPage}>next</button>
            </div>
            <GarageLine s={state} p={page}/>
            
           
        </GarageContainer>
    )

}


