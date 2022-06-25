import styled from "styled-components";

export const PText = styled.p`
    width: 80%;
    height: auto;

    font-size: 1.2rem;

    text-align: start;

    margin: 0;
`

export const ListContainer = styled.ul`
    width: 80%;
    height: auto;
    min-height: 0px;

    margin: 10px;
    padding: 0;
`
export const ListItem = styled.li`
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
    list-style: none;

    text-align: start;

    display: flex;
    
    margin: 10px 0;

    
`


export const FormAdd = styled.form`
    width: 80%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`
export const PTextWhite = styled.p`
    width: 100%;
    height: auto;

    color: white;
    text-align: start;
    margin: 20px auto 10px 0;

`
export const Input = styled.input`
    width: auto;
    min-width: 50px;
    min-height: 30px;

    color: white;
    background: rgb(204,153,255,0.6);

    margin: auto auto 0 0;
`

export const BtnSubmit = styled.button`
    width: auto;
    height: auto;
    min-height: 30px;

    color: white;
    background: rgb(51,153,255,0.6);

    font-size: 1.2rem;

    margin: 10px auto 10px 0;

`

export const BtnDelete = styled.button`
    width: auto;
    height: auto;

    background: red;
    color: white;
    margin: 0 auto 0 0;
`

export const BtnContinue = styled.button`
    width: auto;
    height: auto;
    min-height: 30px;
    background: #8300FF;
    color: #FFF;
    font-size: 1.6rem;
    margin: 20px 20px 20px auto;
`