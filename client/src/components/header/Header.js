import styled from 'styled-components';
import { useState } from 'react';

import Logo from './Logo';
import LoginNav from './LoginNav';
import LogoutNav from './LogoutNav';
import Search from './Search';
import LoginButtons from './LoginButtons';
import LogoutButtons from './LogoutButtons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #f8f8f8;
  border-top: 4px solid #ef8236;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.2);
  padding: 8px 0;
  font-size: 13px;
  z-index: 1;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1264px;
  max-width: 1264px;
`;

function Header({ isLogin }) {
  // const [isLogin, setIsLogin] = useState(false);

  const buttons = isLogin ? <LoginButtons /> : <LogoutButtons />;
  const navitems = isLogin ? <LoginNav /> : <LogoutNav />;

  return (
    <Container>
      <InnerContainer>
        <Logo />
        {navitems}
        <Search />
        {buttons}
      </InnerContainer>
    </Container>
  );
}

export default Header;
