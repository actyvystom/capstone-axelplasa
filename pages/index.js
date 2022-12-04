//import { sanitize } from "@storybook/csf";
//import { redirect } from "next/dist/server/api-utils";
import Image from "next/image"
import styled from "styled-components";
import Icon from "../public/Assets/Agave.jpg"
import { useState } from "react";
import TequilaList from "../_data/TequilaList"

export default function Home(Product) {

const [showProduct, setShowProduct] = useState (true)
const handleProduct = () => {
    setShowProduct (showProduct)
}


return (


<>
    

    <StyledTitle>Casa del Agave</StyledTitle>

    <StyledParagraph>
    Welcome to the Casa
    del Agave online shop. 
    Here you can find a fine
    selection of tequila and
    mezcal brands delivered
    right to your home.
    Thank you for choosing us 
    and we certainly hope 
    you will find the beverage 
    of your convenience.
    </StyledParagraph>

    <TheImage src={Icon} width="310" height="255" alt="an image" />
    
    <div className="Container">
        {/* {TequilaList.map(item  => {
             return (<Product key={item.id} img= {item.id} />)})} */}
             {JSON.stringify(TequilaList)}

    </div>
    


    
    </>











);
}

const TheImage = styled(Image)`
    position: relative;
    left: 850px;
    bottom:260px;
    border: 1px solid black;
    padding: 30px;
`

const StyledTitle = styled.h1`
border: 1px solid black;
width: 400px;
height: 150px;
padding: 55px;
padding-left: 75px;
margin-left: 32%;
margin-top: 70px;
`

const StyledParagraph = styled.p`
border: 1px solid black;
width: 300px;
height: 235px;
margin-top: 100px;
margin-left: 150px;
font-size: 20px;
align-content: center;
padding: 10px;
`
