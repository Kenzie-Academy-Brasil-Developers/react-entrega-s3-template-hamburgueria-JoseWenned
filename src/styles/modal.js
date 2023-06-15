import styled from "styled-components";

export const ModalOverLay = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100%;
    max-width: 25rem;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);

`
export const ModalBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 25rem;
    padding: 2rem;
    background-color: #ffffff;
`