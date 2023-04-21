import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import useAxios from '../services/useAxios';
import { axiosCreate, axiosDelete, axiosPatch } from '../services/api';

import StyledList from '../styles/StyledList';

import { MarkDown } from '../components/Input';
import StyledInputForm from '../styles/StyledInputForm';
import MarkdownViewer from '../components/MarkDownViewer';

const StyledQuestionContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  code {
    font-size: 1rem;
    font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono', Menlo,
      Monaco, Consolas, monospace;
  }
  .questionHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  hr {
    border: 0;
    height: 1px;
    border-top: 1px solid black;
  }
`;
const StyledAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  li {
    list-style: none;
  }
`;

const BlueButton = styled.button`
  background-color: #1e95ff;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
`;

function Question() {
  const devUrl = process.env.REACT_APP_DEV_URL;
  const { id } = useParams();
  const [question, , answers] = useAxios(`${devUrl}/questions/${id}`);
  // answers 도 useaxios로 받아오기

  // const [localAnswers, setLocalAnswers] = useState(question.answer || []);

  const handleDelete = () => {
    axiosDelete(`${devUrl}/questions/${id}`);
  };

  // markdown editor 사용
  // const [bodyValue, setBodyValue] = useState('');

  // answer submit
  // url이 안바뀌니까 answer가 추가되어도 다시 데이터를 불러오지 않는다.
  const editorAnswerRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const answerValue = editorAnswerRef.current?.getInstance().getHTML();
    const newAnswer = { body: answerValue };
    const data = {
      id: question.id,
      title: question.title,
      body: question.body,
      details: question.details,
      answers: [...answers, newAnswer],
    };

    axiosCreate(`${devUrl}/questions/${id}/answers`, newAnswer);
    axiosPatch(`${devUrl}/questions/${id}`, data, id);
    // 리렌더링
    // setLocalAnswers((prev) => [...prev, newAnswer]);
    // setBodyValue('');

    // 클라이언트 측에서는
    // 해당 id의 단일 question에 수정이 가해지는 건 맞다.
  };

  // 2라는 버튼을 누르면
  // axiosGet(`${devUrl}/questions/${id}?page=2`)

  // answers가 잘 쌓이는지 테스트
  // 내일 페이지 도전!

  // 아까 CORS 에러 났음

  return (
    <StyledQuestionContainer>
      <StyledList>
        <div className="questionHeader">
          <h2>{question.title}</h2>
          <BlueButton>Ask Question</BlueButton>
        </div>
        <hr />
        <MarkdownViewer content={question.body} />
        <MarkdownViewer content={question.details} />
        <button type="button" onClick={handleDelete}>
          delete
        </button>
      </StyledList>

      <StyledAnswer>
        <h2>{answers.length} Answers</h2>
        {!answers
          ? null
          : answers.map(el => {
              return (
                <ul>
                  <li key={el.id}>
                    <MarkdownViewer content={el.body} />
                  </li>
                </ul>
              );
            })}
      </StyledAnswer>
      <StyledInputForm onSubmit={handleSubmit}>
        <MarkDown editorRef={editorAnswerRef} />
        <button type="submit">submit</button>
      </StyledInputForm>
    </StyledQuestionContainer>
  );
}

export default Question;
