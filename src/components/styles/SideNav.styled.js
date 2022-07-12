import styled from "styled-components";

export const SideNav = styled.nav`
    background-color: ${(({ theme }) => theme.colors.sideNav)};
    position: absolute;
    left: 0;
    width: 33%;
    height: 100%;
`;

