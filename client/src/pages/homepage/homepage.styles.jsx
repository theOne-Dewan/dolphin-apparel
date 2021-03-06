import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    margin-top: -20px;

    @media screen and (max-width: 800px){
        width: 100%;
        padding: 10px;
        margin-top: revert;
    }
`;