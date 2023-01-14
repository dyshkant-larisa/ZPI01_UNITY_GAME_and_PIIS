import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>Лара Дишкант - ZPI-ZP01</h2>
    </StyledHeader>
  )
}

export default Header;
