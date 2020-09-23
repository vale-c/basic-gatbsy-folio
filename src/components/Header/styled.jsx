import styled from 'styled-components'
import colors from "../../styles/colors"
import { Link } from "gatsby"

export const HeaderLinks = styled.div`
    flex: 1;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-size: 14px;
    & > a {
        color: ${colors.white};
        text-decoration: none;
        margin: 0 15px;
    }
`;

export const StyledLink = styled(Link)`
    transition: color 300ms ease-in-out;
    color: ${colors.white};
    padding: 0 6px;
    &:hover {
        border-bottom: 3px solid ${colors.white};
    }
`
export const HeaderTitle = styled.div`
    font-size: 32px;
    flex-basis: 100%;
    margin-left: 100px;
    text-align: center;
    & > a {
        color: ${colors.white};
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const HeaderWrapper = styled.div`
    background: ${colors.green600};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
`;