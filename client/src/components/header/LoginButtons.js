import styled from 'styled-components';
import { ReactComponent as BoxIcon } from '../../assets/header-box.svg';
import { ReactComponent as TrophyIcon } from '../../assets/header-trophy.svg';
import { ReactComponent as QuestionIcon } from '../../assets/header-question.svg';
import { ReactComponent as TalkIcon } from '../../assets/header-talk.svg';
import UserImg from '../../assets/user.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  .iconstyle {
    margin: 8px;
  }
  img {
    margin-left: 10px;
    width: 24px;
    height: 24px;
  }
  span {
    font-weight: bold;
    margin: 0px 30px 0px 5px;
  }
`;

function FourIcons() {
  return (
    <Container>
      <img src={UserImg} alt="userimg" />
      <span>1</span>
      <BoxIcon className="iconstyle" />
      <TrophyIcon className="iconstyle" />
      <QuestionIcon className="iconstyle" />
      <TalkIcon className="iconstyle" />
    </Container>
  );
}

export default FourIcons;
