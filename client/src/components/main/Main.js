import styled from 'styled-components';
import MainSection from './MainSection';
import RightAside from './RightAside';

const Container = styled.main`
  display: flex;
`;

function Main() {
  return (
    <Container>
      <MainSection />
      <RightAside />
    </Container>
  );
}

export default Main;
