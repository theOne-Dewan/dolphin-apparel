import styled from 'styled-components';
import { ReactComponent as Image } from '../../assets/contactPage.svg';

export const ContactPageContainer = styled.div`
    width: 65vw;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px){
        width: 90vw;
        display: flex;
        flex-direction: column;
        margin: 15px auto;
    }
`;

export const ContactImage = styled(Image)`
    width: 28vw;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px){
        width: 90vw;
        text-align: center;
        height: 40vh;
    }
`;

export const ContactInfo = styled.div`
    width: 28vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 800px){
        width: 90vw;
        text-align: center;
    }
`;