import styled from 'styled-components';
import { MdCake } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { RiPencilFill } from 'react-icons/ri';
import { SlSpeech } from 'react-icons/sl';

import UserImg from '../../assets/user.png';
import OrangeButtons from './OrangeButtons';

const Container = styled.div`
  display: flex;
  img {
    margin-top: 30px;
    width: 128px;
    height: 128px;
  }
`;

const UserInfo = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  margin-left: 8px;
`;

const UserName = styled.h2`
  padding: 10px;
  margin-top: 50px;
  font-weight: normal;
`;

const UserTime = styled.div`
  display: flex;
  padding: 0px 10px;
  font-weight: normal;
  font-size: 15px;
  gap: 15px;
  color: #6a737c;
`;

const EditButtons = styled.div`
  display: flex;
  align-items: start;
  margin-top: 30px;
`;

const EditButton = styled.button`
  background-color: white;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid lightgray;
  cursor: pointer;
  color: #6a737c;
`;

const NetButton = styled.button`
  background-color: white;
  padding: 10px;
  border: 1px solid lightgray;
  cursor: pointer;
  color: #6a737c;
  display: flex;
  align-items: center;
`;

function MyHeader() {
  return (
    <>
      <Container>
        <img src={UserImg} alt="userimg" />
        <UserInfo>
          <UserName>Username</UserName>
          <UserTime>
            <div>
              <MdCake />
              &nbsp;Member for 8 days
            </div>
            <div>
              <AiOutlineClockCircle />
              &nbsp;Last seen this week
            </div>
            <div>
              <BiCalendar />
              &nbsp;Visited 8 days, 8 consecutive
            </div>
          </UserTime>
        </UserInfo>
        <EditButtons>
          <EditButton>
            <RiPencilFill />
            &nbsp;Edit profile
          </EditButton>
          <NetButton>
            <SlSpeech />
            &nbsp;Network profile
          </NetButton>
        </EditButtons>
      </Container>
      <OrangeButtons />
    </>
  );
}

export default MyHeader;
