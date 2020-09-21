import styled from 'styled-components';
import dimensions from "../../styles/dimensions";
import colors from "../../styles/colors";

export const HeaderLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > a {
        color: #fff;
        text-decoration: none;
        margin: 0 15px;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const HeaderTitle = styled.div`
    font-size: 32px;
    flex-basis: 100%;
    text-align: center;
    & > a {
        color: #fff;
        text-decoration: none;
        &: hover {
            cursor: pointer;
        }
    }
`;

export const HeaderWrapper = styled.div`
    background: ${colors.blue600};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
`;