import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  margin-left: 6px;
  align-items: center;
  width: 132px;
  gap: 4px;
`;

const LoginButton = styled.button`
  background-color: #e1ecf4;
  color: #39739d;
  border: 1px solid #b2cbdd;
  border-radius: 4px;
  padding: 8px;
  &:hover {
    background-color: #b3d3ea;
  }
`;

const SignUpButton = styled.button`
  background-color: #1e95ff;
  color: white;
  border: 1px solid #b2cbdd;
  border-radius: 4px;
  padding: 8px;
  &:hover {
    background-color: #0074cc;
  }
`;

function LogoutButtons() {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginButton onClick={() => navigate('/login')}>Log in</LoginButton>
      <SignUpButton onClick={() => navigate('/signup')}>Sign Up</SignUpButton>
    </Container>
  );
}

export default LogoutButtons;
