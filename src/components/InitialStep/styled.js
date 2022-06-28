import styled from "styled-components";

export const ContainerInitialStep = styled.div`
    border-radius: 10px;
  
    width: 80%;
    height: auto;
    min-height: 40%;
    background: rgb(255,255,255,0.4);

    display: flex;
    flex-direction: column;
    align-items: center;

`
export const H1 = styled.h1`
    color: white;
    margin: 20px 0 40px 0;

    font: bold;
    background: pink;
    padding: 10px;
    font-size: 2rem;
    border-radius: 10px;
    width: 80%;
`

export const P = styled.p`
    text-align: justify;
    display: block;

    font-size: 1.6rem;
    width: 70%;
`

export const BtnNext = styled.button`
    cursor: pointer;
    width: auto;
    min-width: 40px;
    height: auto;
    min-height: 30px;
    padding: 0 10px 0 10px;
    margin: auto 20px auto auto;
`