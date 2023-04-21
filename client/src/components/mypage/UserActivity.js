import styled from 'styled-components';

import { ReactComponent as SreIcon } from '../../assets/sre.svg';
import { ReactComponent as EarnIcon } from '../../assets/earn.svg';
import { ReactComponent as MeasureIcon } from '../../assets/measure.svg';

import NavButtons from './NavButtons';

const Container = styled.div`
  display: flex;
  width: 1050px;
  margin: 10px 0px;
`;

const ListTitle = styled.div`
  margin-left: 10px;
  font-size: 21px;
`;

const UserSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryPicture = styled.div`
  display: flex;
  text-align: center;
  .fontsize {
    font-size: 15px;
  }
  .fontgray {
    color: #6a737c;
    font-size: 12px;
  }
`;

const SRe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 363.5px;
  height: 301px;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
  margin: 8px;
  padding: 44px 20px 20px 20px;
  .sremargin {
    margin-top: 30px;
    font-size: 13px;
  }
`;

const Earn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
  margin: 8px;
  padding: 44px;
  width: 286px;
  button {
    background-color: #0a95ff;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10.5px;
    margin-top: 30px;
  }
`;

const Measure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
  margin: 8px;
  padding: 44px 20px 20px;
  width: 211px;
`;

const ListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  p {
    font-size: 21px;
  }
`;

const ListAnswers = styled.div`
  /* font-size: 15px; */
  width: calc(50% - 1rem);
  margin-right: 32px;
`;

const ListQue = styled.div`
  /* font-size: 15px; */
  width: calc(50% - 1rem);
`;

const ListRepu = styled.div`
  /* font-size: 15px; */
  width: calc(50% - 1rem);
`;

const ListTags = styled.div`
  /* font-size: 15px; */
  width: calc(50% - 1rem);
  margin-right: 32px;
`;

const AnswerTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListMessage = styled.div`
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  justify-content: center;

  align-items: center;
  color: #6a737c;
  padding: 24px;
  .bluefont {
    font-size: 13px;
    color: #0074cc;
  }
`;

const ListButtons = styled.div`
  margin-right: 10px;
`;

const ListButton = styled.button`
  /* border-radius: 5px; */
  /* background-color: #e3e6e8; */
  background-color: white;
  font-size: 11px;
  padding: 6.6px;
`;

function UserMain() {
  return (
    <Container>
      <NavButtons />
      <UserSummary>
        <ListTitle>Summary</ListTitle>
        <SummaryPicture>
          <SRe>
            <SreIcon />
            <p className="fontsize">Reputation is how the community thanks you </p>
            <p className="fontgray">
              When users upvote your helpful posts, youll earn reputation and unlock new
              privileges.
            </p>
            <p className="sremargin">Learn more about reputation and privileges</p>
          </SRe>
          <Earn>
            <EarnIcon />
            <p className="fontsize">Earn badges for helpful actions</p>
            <p className="fontgray">
              Badges are bits of digital flair that you get when you participate in
              especially helpful ways.
            </p>
            <button>Take the Tour and earn your first badge</button>
          </Earn>
          <Measure>
            <MeasureIcon />
            <p className="fontsize">Measure your impact</p>
            <p className="fontgray">
              Your posts and helpful actions here help hundreds or thousands of people
              searching for help.
            </p>
          </Measure>
        </SummaryPicture>
        <ListContent>
          <ListAnswers>
            <AnswerTop>
              <ListTitle>Answers</ListTitle>
              <ListButtons>
                <ListButton>Score</ListButton>
                <ListButton>Activity</ListButton>
                <ListButton>Newest</ListButton>
              </ListButtons>
            </AnswerTop>
            <ListMessage>
              You have not &nbsp;<p className="bluefont">answered</p>&nbsp; any questions
            </ListMessage>
          </ListAnswers>
          <ListQue>
            <QuestionTop>
              <ListTitle>Questions</ListTitle>
              <ListButtons>
                <ListButton>Score</ListButton>
                <ListButton>Activity</ListButton>
                <ListButton>Newest</ListButton>
                <ListButton>Views</ListButton>
              </ListButtons>
            </QuestionTop>
            <ListMessage>
              You have not <p className="bluefont">asked</p> any questions
            </ListMessage>
          </ListQue>
          <ListTags>
            <ListTitle>Tags</ListTitle>
            <ListMessage>
              You have not participated any <p className="bluefont">tags</p>
            </ListMessage>
          </ListTags>
          <ListRepu>
            <ListTitle>Reputation</ListTitle>
            <ListMessage>
              You have no recent <p className="bluefont">reputation changes</p>
            </ListMessage>
          </ListRepu>
        </ListContent>
      </UserSummary>
    </Container>
  );
}

export default UserMain;
