import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';
import useAxios from '../services/useAxios';
import { axiosCreate, axiosDelete, axiosPatch, axiosCreateAnswer } from '../services/api';

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
  .buttonContainer {
    display: flex;
    flex-direction: row;

    button {
      background-color: white;
      border: 1px solid lightgray;
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }

    button:hover {
      background-color: gray;
    }

    button:active {
      background-color: orange;
    }
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
  const [question, , answers, , pageInfos] = useAxios(`${devUrl}/questions/${id}`);

  // page 별 answers 불러오기 위한 선언
  const [answersData, setAnswersData] = useState([]);
  // pageInfos가 Question에서 변경될 수 있기 때문에 useState로 관리
  const [pageInfosData, setPageInfosData] = useState(null);
  const navigate = useNavigate();

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
    // answer 하나만 보내면 어차피 갱신된 question을 보내주므로, answer을 POST 요청
    const newAnswer = { content: answerValue };
    axiosCreateAnswer(`${devUrl}/questions/${id}/answers`, newAnswer, id);
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
          // ngrok 으로 데이터 받을 때 browser warning 스킵
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
  };

  const pageButtons = [];

  if (pageInfosData) {
    for (let i = 1; i <= pageInfosData.totalPages; i += 1) {
      pageButtons.push(
        <button key={i} onClick={() => handlePage(i)}>
          {i}
        </button>,
      );
    }
  }

  return (
    <StyledQuestionContainer>
      <StyledList>
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
        <hr />
        <MarkdownViewer content={question.body} />
        <MarkdownViewer content={question.details} />
        <button type="button" onClick={handleDelete}>
          delete
        </button>
      </StyledList>

      <StyledAnswer>
        <div className="buttonContainer">{pageButtons}</div>
        {/* <button
          onClick={() => {
            handlePage(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            handlePage(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            handlePage(3);
          }}
        >
          3
        </button> */}

        <h2>{!pageInfosData ? 0 : pageInfosData.totalElements} Answers</h2>
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
        <MarkDown editorRef={editorAnswerRef} />
        <button type="submit">submit</button>
      </StyledInputForm>
    </StyledQuestionContainer>
  );
}

export default Question;
