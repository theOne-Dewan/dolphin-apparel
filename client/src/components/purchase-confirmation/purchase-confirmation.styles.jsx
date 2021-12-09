import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 200px auto;
    text-align: center;
    color: green;

    @media screen and (max-width: 800px){
        width: 90vw;
        margin: 100px auto;
    }
`;
