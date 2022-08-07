import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const GarageContainer = styled(Box)(()=> ({
    padding: '5px 10px',
    display: 'grid',
    //gridTemplateRows: '1fr 1fr 1fr',
    minHeight: '100%',
    background: 'lightBlue',
}))

export const CarOptions = styled(Box)(()=> ({
    background: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    //flexDirection: 'row',
    //justifyContent: "flex-start",
  //justifyContent: 'center',
  width: '80%',
  marginBottom: '20px'
  //height: '80px'
}))

export const AllCarControls = styled(Box)(()=> ({
    padding: '5px 10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '25px',
    width: '60%',
    height: '80px'
}))