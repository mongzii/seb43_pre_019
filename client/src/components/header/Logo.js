import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as StackoverFlowLogo } from '../../assets/logo-stackof.svg';

const Container = styled.div`
  display: flex;
  padding: 0 8px;
  cursor: pointer;
`;

const LogoName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
  font-size: 20px;
  p {
    font-weight: bold;
  }
`;

function Logo() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      <StackoverFlowLogo />
      <LogoName>
        stack <p>overflow</p>
      </LogoName>
    </Container>
  );
}

export default Logo;
