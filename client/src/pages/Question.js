import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import useAxios from '../services/useAxios';
import { axiosDelete, axiosPatch } from '../services/api';

import StyledList from '../styles/StyledList';

import { MarkDown } from '../components/Input';
import StyledInputForm from '../styles/StyledInputForm';
import MarkdownViewer from '../components/MarkDownViewer';

const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  code {
    font-size: 1rem;
    font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', 'Liberation Mono', Menlo,
      Monaco, Consolas, monospace;
  }
`;
const StyledAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-left: 30px;
  li {
    list-style: none;
  }
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

    axiosPatch(`${devUrl}/questions/${id}`, data, id);
    // 리렌더링
    // setLocalAnswers((prev) => [...prev, newAnswer]);
    // setBodyValue('');
  };

  return (
    <StyledQuestionContainer>
      <StyledList>
        <h2>{question.title}</h2>
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
