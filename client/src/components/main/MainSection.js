import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useAxios from '../../services/useAxios';
import MarkdownViewer from '../feat/MarkDownViewer';

const InnerContainer = styled.div`
  /* position: fixed; */
  /* display: flex; */
  padding: 20px;
`;

const TopFirst = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0px 20px;
  margin: 0px; */
  width: 802px;
`;

const QHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: normal;
  margin: 0px;
`;

const BlueButton = styled.button`
  background-color: #1e95ff;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
  box-shadow: inset 0px 1px 0px 0 #79c1ff;
  border: 1px solid #1e95ff;
  cursor: pointer;
`;

const TopSecond = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 802px;
  margin-top: 10px;
  p {
    font-size: 18px;
  }
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 30px; */
  button {
    height: 35.03px;
    padding: 9.3px;
    margin: 0px -1px -1px 0px;
    color: #6a737c;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #6a737c;
    border-radius: 2px;
    cursor: pointer;
    :active {
      background-color: #e3e6e8;
    }
  }
  button:hover {
    background-color: hsl(210, 8%, 95%);
  }
  .filter {
    margin: 13px;
  }
`;

// Questions

const Container = styled.div`
  display: flex;
  /* justify-content: ; */
  border-top: 1px solid lightgray;
  padding-top: 10px;
  height: 110px;
`;

const QAnswer = styled.div`
  width: 100px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 2px;
  margin-right: 13px;
  gap: 8px;
  .answer {
    color: #6b737c;
  }
`;

const QDetail = styled.div`
  width: 595px;
  height: 128px;
  .qtitle {
    color: #1675cc;
    /* font-weight: bold; */
    font-size: 18px;
    text-decoration: none;
  }
  .qbody {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 13px;
    color: #6c7074;
    margin-top: 5px;
    /* 코드블록 미리보기 방지 */
    pre {
      display: none;
    }
  }
`;

const QUser = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: end;
  gap: 4px;
  margin-top: 5px;
  .username {
    color: #1574cc;
  }
  .reputation {
    font-weight: bold;
  }
  .time {
    color: #8c9199;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;

// 지금은 MainSection에서 개별 Question을 컴포넌트 형태로 불러오고 있음
// 그런데 그렇게 구현하려면 각 Question의 데이터를 따로 불러와야 해서 로직을 짜는 게 쉽지 않음
// 해결 방법: MainSection 안에 Questions 관련 Styled-Components 불러와서 한 번에 구현

function MainSection() {
  const devUrl = process.env.REACT_APP_DEV_URL;
  const { questions } = useAxios(`/api/questions`);
  return (
    <InnerContainer>
      <TopFirst>
        <QHeader>All Questions</QHeader>
        <Link to="/questions/ask">
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </TopFirst>
      <TopSecond>
        <p>23,645,216 questions</p>
        <ButtonList>
          <button>Newest</button>
          <button>Active</button>
          <button>Bountied</button>
          <button>Unanswered</button>
          <button>More</button>
          <button className="filter">Filter</button>
        </ButtonList>
      </TopSecond>
      {!questions
        ? null
        : questions.map(question => (
            <Container key={question.id}>
              <QAnswer>
                <p>0 votes</p>
                <p className="answer">0 answers</p>
                <p className="answer">0 views</p>
              </QAnswer>
              <QDetail>
                <Link className="qtitle" to={`/questions/${question.id}`}>
                  <h3>{question.title}</h3>
                  <p className="qbody">
                    <MarkdownViewer content={question.body} />
                  </p>
                </Link>
              </QDetail>
              <QUser>
                <img
                  src="https://www.gravatar.com/avatar/9809af9b625621928e70e9f40ef050a4?s=32&d=identicon&r=PG&f=1"
                  alt="useravatar"
                />
                <span className="username">Jared</span>
                <span className="reputation">11</span>
                <span className="time">asked 44 mins ago</span>
              </QUser>
            </Container>
          ))}
    </InnerContainer>
  );
}

export default MainSection;
