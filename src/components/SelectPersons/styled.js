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
`


export const FormAdd = styled.form`
    width: 80%;
    height: auto;
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

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BtnSubmit = styled.button`
    width: auto;
    height: auto;
    min-height: 30px;

    color: white;
    background: rgb(51,153,255,0.6);

    font-size: 2rem;

    margin: 10px;
`