import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';
import useAxios from '../services/useAxios';
import { axiosCreate, axiosDelete, axiosPatch, axiosCreateAnswer } from '../services/api';

import { MarkDown } from '../components/Input';
import StyledInputForm from '../styles/StyledInputForm';
import MarkdownViewer from '../components/MarkDownViewer';
import { ReactComponent as VscTriangleDown } from '../assets/vsc-triangle-down.svg';
import { ReactComponent as VscTriangleUp } from '../assets/vsc-triangle-up.svg';
import { ReactComponent as BookMark } from '../assets/book-mark.svg';
import { ReactComponent as IconHistory } from '../assets/ic-history.svg';

const StyledQuestionContainer = styled.div`
  h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted', 'Segoe UI',
      'Liberation Sans', sans-serif;
    font-weight: normal;
    color: hsl(210, 8%, 25%);
  }
  h3 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted', 'Segoe UI',
      'Liberation Sans', sans-serif;
    font-weight: normal;
    color: hsl(210, 8%, 25%);
  }
  padding: 24px;
  display: flex;
  flex-direction: column;

  .questionHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .date-wrap {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 12px;
    border-bottom: 1px solid hsl(210, 8%, 75%);
    padding-bottom: 10px;
    margin-bottom: 20px;
    > * {
      display: flex;
      flex-direction: row;
      gap: 5px;
      span {
        color: hsl(210, 8%, 40%);
      }
    }
  }

  .post-layout {
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    .post-body {
      p {
        margin-bottom: 1.1em;
        line-height: 1.5em;
      }
      code {
        font-size: 13px;
        font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono',
          Menlo, Monaco, Consolas, monospace;
      }
    }
  }

  .votecell {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-right: 20px;

    .saves-btn {
      border: none;
      background-color: transparent;
      padding: 4px 0 4px 0;
    }

    .post-issue {
      background-color: transparent;
      padding: 4px 0 4px 0;
    }

    .iconArrowUpLg,
    .iconArrowDownLg {
      fill: hsl(210, 8%, 75%);
      cursor: pointer;
    }
    .iconBookmark {
      stroke: hsl(210, 8%, 55%);
      fill: transparent;
      cursor: pointer;
    }

    .iconHistory {
      fill: hsl(210, 8%, 70%);
      cursor: pointer;
      :hover {
        fill: #0a95ff;
      }
    }
  }
  .postcell {
    width: 100%;
    button {
      background-color: transparent;
      border: none;
      color: gray;
    }
    .post-footer {
      width: 100%;
    }
    .post-footer-wrap {
      display: flex;
      flex-direction: row;

      margin: 16px 0 16px 0;
      > * {
        flex-grow: 1;
        margin: 4px 0 4px 0;
      }
      .post-editor {
        color: #2587d2;
        font-size: 12px;
        .editedtime {
          margin-left: 4px;
        }
      }
      .user-info {
        font-size: 12px;
        border-radius: 5px;
        padding: 5px 6px 7px 7px;
        background-color: #d9eaf7;
        display: flex;
        flex-direction: column;
        .user-action-time {
          margin: 1px 0 4px 0;
          .postedtime {
            margin-left: 4px;
          }
        }
        .user-details {
        }

        span {
          color: hsl(210, 8%, 40%);
        }
        .user-wrap {
          display: flex;
          flex-direction: row;
          .user-avatar {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .user-details {
            margin-left: 8px;
            font-size: 12px;
            .user-name {
            }
            .flair {
              margin-top: 4px;
              display: flex;
              flex-direction: row;
              gap: 4px;
              > .goldBadge::before {
                content: '●';
                font-size: 10px;
                color: gold;
                padding-top: 3px;
                margin-right: 3px;
              }
              .goldBadge {
                display: flex;
                flex-direction: row;
              }
              > .silverBadge::before {
                content: '●';
                font-size: 10px;
                color: silver;
                padding-top: 3px;
                margin-right: 3px;
              }
              .silverBadge {
                display: flex;
                flex-direction: row;
              }
              > .copperBadge::before {
                content: '●';
                font-size: 10px;
                color: #d1a684;
                padding-top: 3px;
                margin-right: 3px;
              }
              .copperBadge {
                display: flex;
                flex-direction: row;
              }
            }
          }
        }
      }
    }
  }
`;
const StyledAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    list-style: none;
  }
  .post-buttons {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
`;

const BlueButton = styled.button`
  background-color: #1e95ff;
  color: white;

  border-radius: 5px;
  padding: 12px 10px;
  width: fit-content;
  /* boxshadow & border로 안쪽 입체감 주기 */
  box-shadow: inset 0px 1px 0px 0 #79c1ff;
  border: 1px solid #1e95ff;
  cursor: pointer;
`;

const PageButton = styled.button`
  background-color: ${props => (props.isActive ? '#f48225' : 'white')};
  color: ${props => (props.isActive ? 'white' : 'black')};
  border: ${props =>
    props.isActive ? '1px solid #f48225' : '1px solid hsl(210, 8%, 75%)'};

  width: 30px;
  height: 30px;
  border-radius: 5px;
  :hover {
    border: ${props =>
      props.isActive ? '1px solid #f48225' : '1px solid hsl(210, 8%, 75%)'};
    background-color: ${props => (props.isActive ? '#f48225' : 'hsl(210, 8%, 90%)')};
  }

  /* 선택된 버튼 스타일 */
  &.active {
    background-color: orange;
  }
`;

function Question() {
  const devUrl = process.env.REACT_APP_DEV_URL;
  const { id } = useParams();
  const [question, , answers, , pageInfos] = useAxios(`${devUrl}/questions/${id}`);

  // page 별 answers 불러오기 위한 선언
  const [answersData, setAnswersData] = useState([]);
  // pageInfos가 Question에서 변경될 수 있기 때문에 useState로 관리
  const [pageInfosData, setPageInfosData] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // answers가 바뀌면 answersData가 변할 수 있도록 useEffect 사용
  useEffect(() => {
    setAnswersData(answers);
    setPageInfosData(pageInfos);
  }, [answers, pageInfos]);

  const handleDelete = () => {
    axiosDelete(`${devUrl}/questions/${id}`);
  };

  const editorAnswerRef = useRef();
  // answer submit
  const handleSubmit = e => {
    e.preventDefault();
    const answerValue = editorAnswerRef.current?.getInstance().getHTML();
    // answer 하나만 보내면 어차피 갱신된 question을 보내주므로,
    // question PATCH 요청 X. answer을 POST 요청한다.
    const newAnswer = { content: answerValue };
    axiosCreateAnswer(`${devUrl}/questions/${id}/answers`, newAnswer, id);
  };

  const handleEdit = () => {
    navigate(`/questions/${id}/edit`);
  };

  const handlePage = async page => {
    // 2라는 버튼을 누르면
    // axiosGet(`${devUrl}/questions/${id}?page=2`)

    navigate(`?page=${page}`);
    try {
      await axios(`${devUrl}/questions/${id}?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
      })
        .then(response => {
          // url이 안바뀌니까 answer가 추가되어도 다시 데이터를 불러오지 않는다.
          // state 초기화
          setAnswersData(response.data.answers);
        })
        .catch(err => console.log(err.message));
      // 받아온 데이터를 처리하는 로직
    } catch (error) {
      // 에러 처리 로직
    }
    setCurrentPage(page);
  };

  const pageButtons = [];

  if (pageInfosData) {
    for (let i = 1; i <= pageInfosData.totalPages; i += 1) {
      const isActive = currentPage === i;
      console.log(i, isActive);
      pageButtons.push(
        <PageButton key={i} isActive={isActive} onClick={() => handlePage(i)}>
          {i}
        </PageButton>,
      );
    }
  }

  return (
    <StyledQuestionContainer>
      <div className="question">
        <div className="questionHeader">
          <h2>{question.title}</h2>
          <BlueButton
            onClick={() => {
              navigate('/questions/ask');
            }}
          >
            Ask Question
          </BlueButton>
        </div>
        <div className="date-wrap">
          <div className="asked-date">
            <span>Asked</span>
            <div>2 days ago</div>
          </div>
          <div className="modified-date">
            <span>Modified</span>
            <div>today</div>
          </div>
          <div className="viewed-count">
            <span>Viewed</span>
            <div>25 times</div>
          </div>
        </div>

        <div className="post-layout">
          <div className="votecell">
            <VscTriangleUp />
            <div>2</div>
            <VscTriangleDown />
            <button className="saves-btn">
              <BookMark />
            </button>
            <a href="/" className="post-issue">
              <IconHistory />
            </a>
          </div>
          <div className="postcell">
            <div className="post-body">
              <MarkdownViewer content={question.body} />

              <div className="post-tags" />
              <div className="post-footer">
                <div className="post-footer-wrap">
                  <div className="button-wrap">
                    <button type="button" className="textBut">
                      share
                    </button>
                    <button type="button" className="textBut" onClick={handleEdit}>
                      edit
                    </button>
                    <button type="button" className="textBut" onClick={handleDelete}>
                      delete
                    </button>
                    <button type="button" className="textBut">
                      follow
                    </button>
                  </div>
                  <div className="post-editor">
                    <span>edited</span>
                    <span className="editedtime">Dec 23, 2021 at 20:30</span>
                  </div>
                  <div className="post-writer">
                    <div className="user-info">
                      <div className="user-action-time">
                        <span>asked</span>
                        <span title="2023-04-23 04:48:13Z" className="postedtime">
                          15 mins ago
                        </span>
                      </div>
                      <div className="user-wrap">
                        <div className="user-avatar">
                          <img
                            src="https://www.gravatar.com/avatar/741bc7bd7d33891f99a5de08d73c66b2?s=64&d=identicon&r=PG&f=1"
                            alt="dummy-avatar"
                            width="32"
                            height="32"
                            className="avatar-pic"
                          />
                        </div>
                        <div className="user-details">
                          <a className="user-name" href="/">
                            hajongon
                          </a>
                          <div className="flair">
                            <span>4,379</span>
                            <span className="goldBadge">3</span>
                            <span className="silverBadge">3</span>
                            <span className="copperBadge">3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StyledAnswer>
        {pageInfosData ? (
          <h3>{!pageInfosData ? 0 : pageInfosData.totalElements} Answers</h3>
        ) : null}
        <div className="buttonContainer">{pageButtons}</div>
        {!answersData
          ? null
          : answersData.map(el => {
              return (
                <ul>
                  <li key={el.id}>
                    <MarkdownViewer content={el.content} />
                  </li>
                </ul>
              );
            })}
      </StyledAnswer>
      <StyledInputForm onSubmit={handleSubmit}>
        <h3>Your Answer</h3>
        <MarkDown editorRef={editorAnswerRef} />
        <div className="form-submit">
          <BlueButton type="submit">Post Your Answer</BlueButton>
        </div>
      </StyledInputForm>
    </StyledQuestionContainer>
  );
}

export default Question;
