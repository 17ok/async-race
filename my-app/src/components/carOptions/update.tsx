import ChooseColor from "./chooseColor";
import ChooseModel from "./chooseModel";

export default function Update(){
    return (
        <><input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> ChooseModel(e.target.value)}/>
        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> ChooseColor(e.target.value)}/>
        <button> update </button></>
    )
}