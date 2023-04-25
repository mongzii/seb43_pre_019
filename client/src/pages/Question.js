import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';
import useAxios from '../services/useAxios';
import {
  axiosCreate,
  axiosDelete,
  axiosPatch,
  axiosCreateAnswer,
  axiosDeleteAnswer,
} from '../services/api';

import { MarkDown } from '../components/Input';
import StyledInputForm from '../styles/StyledInputForm';
import MarkdownViewer from '../components/MarkDownViewer';

import DateWrap from '../components/question/DateWrap';
import VoteCell from '../components/question/VoteCell';
import AnswerSort from '../components/question/AnswerSort';
import PostWriter from '../components/question/PostWriter';
import AnswerWriter from '../components/question/AnswerWriter';

const StyledQuestionContainer = styled.div`
  width: 850px;
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
`;

const StyledQuestion = styled.div``;
const QuestionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  font-size: 14px;
`;

const PostLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 14px;
`;

const PostBody = styled.div`
  p {
    margin-bottom: 1.1em;
    line-height: 1.5em;
  }
  code {
    font-size: 13px;
    font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono', Menlo,
      Monaco, Consolas, monospace;
  }
`;

const PostTags = styled.div``;

const PostCell = styled.div`
  width: 100%;
  button {
    background-color: transparent;
    border: none;
    color: gray;
  }
  .post-footer {
  }
  border-bottom: 1px solid hsl(210, 8%, 95%);
`;

const PostFooter = styled.div`
  width: 100%;
  .post-footer-wrap {
  }
`;

const PostFooterWrap = styled.div`
  display: flex;
  flex-direction: row;

  margin: 16px 0 16px 0;
  > * {
    flex-grow: 1;
    margin: 4px 0 4px 0;
  }
  .post-editor {
  }
  .user-info {
  }
`;

const PostEditor = styled.div`
  color: #2587d2;
  font-size: 12px;
  .editedtime {
    margin-left: 4px;
  }
`;

const ButtonWrap = styled.div``;

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
  /* &.active {
    background-color: orange;
  } */
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

const AnswersHeader = styled.div``;
const AnswersSubHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
const AnswersCount = styled.div`
  flex: 1 auto;
`;
const AnswerBody = styled.div``;

const AnswersComments = styled.div``;
const CommentsContainer = styled.div`
  margin-bottom: 16px;
`;

const CmtListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
const CmtAction = styled.div`
  padding: 6px;
  width: auto;
`;
const CmtScore = styled.div`
  margin-right: 10px;
  span {
    font-size: 12px;
    color: hsl(27, 90%, 55%);
    font-weight: 600;
  }
`;
const CmtText = styled.div`
  font-size: 12px;
  flex-grow: 1;
  padding: 6px;
  border-bottom: 1px solid hsl(210, 8%, 95%);
`;
const CmtBody = styled.div`
  word-wrap: break-word;
`;
const CmtCopy = styled.div`
  display: inline-flex;
  margin-right: 10px;
`;
const CmtUser = styled.a`
  color: #2587d2;
  display: inline-flex;
  margin-right: 10px;
`;

const CmtDate = styled.div`
  display: inline-flex;
  color: hsl(210, 8%, 60%);
`;
const CommentsList = styled.ul``;
const CommentInputContainer = styled.div`
  width: 75%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AddCommentInput = styled.div`
  > textarea {
    width: 100%;
  }
`;

const AddCommentMessage = styled.div`
  color: hsl(210, 8%, 60%);
  font-size: 12px;
`;
const CommentButtonContainer = styled.div`
  margin-left: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const AddButtonWrap = styled.div`
  margin-bottom: 10px;
`;
const HelpButtonWrap = styled.div`
  padding: 5px;
`;

const HelpButton = styled.div`
  background-color: transparent;
  border: none;
  color: #2587d2;
  font-size: 12px;
`;

const AddCommentButton = styled.button``;
const AddCommentForm = styled.form`
  margin-bottom: 20px;
`;
const CommentFormContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
const AddComment = styled.div``;
const CommentLinkContainer = styled.div`
  margin-bottom: 20px;
`;
const AddCommentLink = styled.a`
  color: #2587d2;
  cursor: pointer;
`;

const BlueButton = styled.button`
  background-color: #1e95ff;
  color: white;

  border-radius: 5px;
  padding: 12px 10px;
  width: fit-content;
  min-width: fit-content;
  /* boxshadow & border로 안쪽 입체감 주기 */
  box-shadow: inset 0px 1px 0px 0 #79c1ff;
  border: 1px solid #1e95ff;
  cursor: pointer;
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

  console.log(answersData);
  const handleDelete = () => {
    axiosDelete(`${devUrl}/questions/${id}`);
  };

  const editorAnswerRef = useRef();
  // add answer
  const handleAddAnswer = e => {
    e.preventDefault();
    const answerValue = editorAnswerRef.current?.getInstance().getHTML();
    // answer 하나만 보내면 어차피 갱신된 question을 보내주므로,
    // question PATCH 요청 X. answer을 POST 요청한다.
    const newAnswer = { content: answerValue };
    axiosCreateAnswer(`${devUrl}/questions/${id}/answers`, newAnswer, id);
  };

  // delete answer
  const handleDeleteAnswer = answerId => {
    axiosDeleteAnswer(`${devUrl}/questions/${id}/answers/${answerId}`, id);
  };

  // edit question
  const handleEdit = () => {
    navigate(`/questions/${id}/edit`);
  };

  // move to other answers page
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

  const [commentInput, setCommentInput] = useState('');
  const [isCreatingComment, setIsCreatingComment] = useState(false);

  const handleComment = e => {
    setCommentInput(e.target.value);
  };
  const handleAddComment = (e, answerId) => {
    const newComment = {
      text: commentInput,
    };
    // answerId만 있으면 상위 questionId까지 유추할 수 있음
    axiosCreateAnswer(`${devUrl}/answers/${answerId}/comments`, newComment, id);
    setIsCreatingComment(false);
  };

  const pageButtons = [];

  if (pageInfosData) {
    for (let i = 1; i <= pageInfosData.totalPages; i += 1) {
      const isActive = currentPage === i;

      pageButtons.push(
        <PageButton key={i} isActive={isActive} onClick={() => handlePage(i)}>
          {i}
        </PageButton>,
      );
    }
  }

  return (
    <StyledQuestionContainer>
      <StyledQuestion>
        <QuestionHeader>
          <h2>{question.title}</h2>
          <BlueButton
            onClick={() => {
              navigate('/questions/ask');
            }}
          >
            Ask Question
          </BlueButton>
        </QuestionHeader>
        <DateWrap />
        <PostLayout>
          <VoteCell />
          <PostCell>
            <PostBody>
              <MarkdownViewer content={question.body} />
              <PostTags />
              <PostFooter>
                <PostFooterWrap>
                  <ButtonWrap>
                    <button type="button">share</button>
                    <button type="button" onClick={handleEdit}>
                      edit
                    </button>
                    <button type="button" onClick={handleDelete}>
                      delete
                    </button>
                    <button type="button">follow</button>
                  </ButtonWrap>
                  <PostEditor>
                    <span>edited</span>
                    <span className="editedtime">Dec 23, 2021 at 20:30</span>
                  </PostEditor>
                  <PostWriter />
                </PostFooterWrap>
              </PostFooter>
            </PostBody>
          </PostCell>
        </PostLayout>
      </StyledQuestion>
      {answersData.length ? (
        <StyledAnswer>
          <AnswersHeader>
            <AnswersSubHeader>
              <AnswersCount>
                {pageInfosData ? (
                  <h3>{!pageInfosData ? 0 : pageInfosData.totalElements} Answers</h3>
                ) : null}
              </AnswersCount>
              <AnswerSort />
            </AnswersSubHeader>
          </AnswersHeader>
          <div className="buttonContainer">{pageButtons}</div>

          {!answersData
            ? null
            : answersData.map(el => {
                return (
                  <ul>
                    <li key={el.id}>
                      <AnswerLayout>
                        <VoteCell />
                        <PostCell>
                          <AnswerBody>
                            <MarkdownViewer content={el.content} />
                          </AnswerBody>
                          <PostFooter>
                            <PostFooterWrap>
                              <ButtonWrap>
                                <button type="button">share</button>
                                <button type="button">edit</button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteAnswer(el.id)}
                                >
                                  delete
                                </button>
                                <button type="button">flag</button>
                              </ButtonWrap>
                              <PostEditor>
                                <span>edited</span>
                                <span className="editedtime">Dec 23, 2021 at 20:30</span>
                              </PostEditor>
                              <AnswerWriter />
                            </PostFooterWrap>
                          </PostFooter>
                        </PostCell>
                        <div className="dummy" />
                        <AnswersComments>
                          <CommentsContainer>
                            <CommentsList>
                              {el.comments.map(comment => {
                                return (
                                  <CmtListItem key={comment.id}>
                                    <CmtAction>
                                      <CmtScore>
                                        <span>124</span>
                                      </CmtScore>
                                    </CmtAction>
                                    <CmtText>
                                      <CmtBody>
                                        <CmtCopy>{comment.text}</CmtCopy>
                                        <CmtUser>hajongon</CmtUser>
                                        <CmtDate>May 11, 2023 at 12:45</CmtDate>
                                      </CmtBody>
                                    </CmtText>
                                  </CmtListItem>
                                );
                              })}
                            </CommentsList>
                          </CommentsContainer>
                          {isCreatingComment ? (
                            <AddCommentForm onSubmit={() => handleAddComment(el.id)}>
                              <CommentFormContainer>
                                <CommentInputContainer>
                                  <AddCommentInput>
                                    <textarea onChange={handleComment} />
                                  </AddCommentInput>
                                  <AddCommentMessage>
                                    Enter at least 15 characters
                                  </AddCommentMessage>
                                </CommentInputContainer>
                                <AddComment>
                                  <CommentButtonContainer>
                                    <AddButtonWrap>
                                      <BlueButton type="submit">Add comment</BlueButton>
                                    </AddButtonWrap>
                                    <HelpButtonWrap>
                                      <HelpButton>Help</HelpButton>
                                    </HelpButtonWrap>
                                  </CommentButtonContainer>
                                </AddComment>
                              </CommentFormContainer>
                            </AddCommentForm>
                          ) : (
                            <CommentLinkContainer>
                              <AddCommentLink
                                onClick={() => {
                                  setIsCreatingComment(true);
                                }}
                              >
                                Add a comment
                              </AddCommentLink>
                            </CommentLinkContainer>
                          )}
                        </AnswersComments>
                      </AnswerLayout>
                    </li>
                  </ul>
                );
              })}
        </StyledAnswer>
      ) : null}

      <StyledInputForm onSubmit={handleAddAnswer}>
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
