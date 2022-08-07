import { Route, Routes } from "react-router-dom";
import {Garage} from "../garage/garage";
import Winners from "../winners/winners";

export default function Main(){
    return (
        <>
          <Routes>
            <Route index element={<Garage />}/>
             <Route path="/garage" element={<Garage />}/>
             <Route path="/winners" element={<Winners />}/>
          </Routes>
        </>
    )
}