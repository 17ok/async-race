import { NavLink } from "react-router-dom"
import { HeaderContainer, NavigationContainer } from "./style"

export default function Header(){
   return ( 
<HeaderContainer>
    <NavigationContainer>
          <NavLink to = "/garage" className="navLink">
            Garage
          </NavLink>
          <NavLink to = "/winners" className="navLink">
            Winners
          </NavLink>
    </NavigationContainer>
</HeaderContainer>
)
}