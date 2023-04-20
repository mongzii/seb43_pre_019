import styled from 'styled-components';
import { ReactComponent as BoxIcon } from '../../assets/header-box.svg';
import { ReactComponent as TrophyIcon } from '../../assets/header-trophy.svg';
import { ReactComponent as QuestionIcon } from '../../assets/header-question.svg';
import { ReactComponent as TalkIcon } from '../../assets/header-talk.svg';

const Container = styled.div`
  /* display: flex; */
  width: 132px;
  .iconstyle {
    margin: 6.5px;
  }
`;

function FourIcons() {
  return (
    <Container>
      <BoxIcon className="iconstyle" />
      <TrophyIcon className="iconstyle" />
      <QuestionIcon className="iconstyle" />
      <TalkIcon className="iconstyle" />
    </Container>
  );
}

export default FourIcons;
