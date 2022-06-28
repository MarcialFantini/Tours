import styled from "styled-components";

export const PText = styled.p`
    width: 80%;
    height: auto;

    font-size: 1.6rem;

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
    font-size: 1.6rem;
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
    font-size: 1.6rem;
    color: white;
    text-align: start;
    margin: 20px auto 10px 0;

`
export const Input = styled.input`
    width: 80%;
    min-width: 50px;
    min-height: 30px;

    font-size: 1.6rem;
    color: white;
    background: rgb(204,153,255,0.2);

    margin: auto auto 0 0;
`

export const BtnSubmit = styled.button`
    width: auto;
    height: auto;
    min-height: 30px;
    color: white;
    background: rgb(51,153,255,0.6);
    padding: 10px;
    font-size: 1.6rem;
    border-radius: 10px;
    margin: 20px auto 20px 0 ;

    

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
    color: white;
    background: violet;
    padding: 10px;
    font-size: 1.6rem;
    border-radius: 10px;
    margin: 20px auto 20px 0 ;
`