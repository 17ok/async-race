import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(Box)(()=> ({
    padding: '5px 10px',
    alignItems: 'center',
    background: 'orange',
    display: 'flex',
    flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  gap: '30vw'
}))

export const NavigationContainer= styled(Box)(()=>({
  display: 'block',
  justifyContent: 'center',
  alignItems: 'spaceAround',
  flexGrow: 2,
  gap: '50vw'
  
}))