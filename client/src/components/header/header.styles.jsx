import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg';

const logoContainerStyles = css`
    width: 200px;
    height: 70px;
    margin-top: 5px;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    width: 70px;
    height: 100%;
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
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;