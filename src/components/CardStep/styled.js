import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url(${props => props.src});
    background-size: cover;
    
    
`