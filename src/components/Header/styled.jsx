import styled from 'styled-components';
import dimensions from "../../styles/dimensions";
import colors from "../../styles/colors";

export const HeaderLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > a {
        margin: 0 15px;
    }
`;

export const HeaderTitle = styled.h1`
    flex-basis: 90%;
    text-align: center;
`;

export const HeaderWrapper = styled.div`
    background: ${colors.blue600};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-top: -8px;
`;