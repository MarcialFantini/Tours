import styled from "styled-components";

export const TotalToPay = styled.div`
    width: 80%;
    height: auto;
    
`

export const TitleSecondary = styled.h2`
    text-align: center;
    font-size: 2rem;
    /* subrayado */
    text-decoration: ${props => props.subrayado ? "underline" : null};

`

export const Ul = styled.ul`
 width: 80%;
 height: auto;
 margin: auto;
`

export const Li = styled.li`
    width: 100%;
    height: auto;
    min-height: 30px;
    columns: black;
    text-align: start;
    font-size: 1.6rem;
`

export const BtnConfirmTotal = styled.button`
    width: auto;
    height: auto;
    min-height: 40px;
    color: white;
    background: blueviolet;
    padding: 10px;
    font-size: 1.6rem;
    border-radius: 10px;
    margin: 20px auto ;
`