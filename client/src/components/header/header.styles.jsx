import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg';

const logoContainerStyles = css`
    width: 200px;
    height: 30px;
    margin-top: 5px;

    @media screen and (max-width: 800px){
        width: 200px;
        height: 25px;
        margin-top: unset;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px){
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
`;

export const LogoContainer = styled(Link)`
    width: 70px;
    height: 100%;

    @media screen and (max-width: 800px){
        width: 100%;
        text-align:center;
    }
`;

export const LogoStyle = styled(Logo)`
    ${logoContainerStyles}
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 100%;
        justify-content: center;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;