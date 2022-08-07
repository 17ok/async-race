import { carBrands } from "./brands";
import { carModels } from "./models";

export default function randomCarsArray(){
    const brandsIndex = Math.floor(carBrands.length * Math.random());
    const modelsIndex = Math.floor(carModels.length * Math.random());
    return [...Array(100).map(() => `${carBrands[brandsIndex]} ${carModels[modelsIndex]}`)]
}