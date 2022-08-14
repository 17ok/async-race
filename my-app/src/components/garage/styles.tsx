import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

export const GarageContainer = styled(Box)(()=> ({
    padding: '5px 10px',
    display: 'grid',
    minHeight: '100%',
    background: 'lightBlue',
}))

export const CarOptions = styled(Box)(()=> ({
    background: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  width: '80%',
  marginBottom: '20px'
}))

export const AllCarControls = styled(Box)(()=> ({
    padding: '5px 10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '25px',
    width: '60%',
    height: '80px'
}))