import styled from 'styled-components';

const LinkItem = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: #f8f8f8;
  color: #525960;
  font-weight: 400;
`;

const Container = styled.nav`
  display: flex;
  /* width: 236px; */
`;

function Nav() {
  return (
    <Container>
      <LinkItem>Products</LinkItem>
    </Container>
  );
}

export default Nav;
