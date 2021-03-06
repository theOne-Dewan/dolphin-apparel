import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px){
        align-items: center;
        margin-bottom: 40px;
    }
`;

export const TitleLink = styled(Link)`
    font-weight: bolder;
    font-size: 25px;
    margin-bottom: 25px;
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;