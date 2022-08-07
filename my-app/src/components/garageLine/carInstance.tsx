import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import CarIcon from "./carIcon";

type CarInstanceProps = {
    name: string;
    color: string;
    id: number;
    key: number
}

export default function CarInstance({name, color, id, key}: CarInstanceProps){
    return(
        <div key={key} style={{display: "flex", flexDirection: "column"}}>  
          <div style = {{display: "flex", flexDirection: "row", gap: "10px"}}>
            <button>select</button>
            <button>remove</button>
            <span>{name}</span>
          </div>  
          <div style = {{display: "flex", flexDirection: "row", gap: "10px"}}>
            <button>A</button>
            <button>B</button>
          </div>
          <div style = {{display: "flex", flexDirection: "row", justifyContent: "spaceBetween", gap: "70vw"}}>
            <div key={id}>
              {CarIcon(color)}
            </div>
            <div>
            <img src="./flagIcon.png" alt="flag" style={{width: "30px", height: "30px"}}/>
            </div>
          </div>

        </div>

    )

}