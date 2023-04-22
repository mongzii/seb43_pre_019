import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';
import useAxios from '../services/useAxios';
import { axiosCreate, axiosDelete, axiosPatch, axiosCreateAnswer } from '../services/api';

import StyledList from '../styles/StyledList';

import { MarkDown } from '../components/Input';
import StyledInputForm from '../styles/StyledInputForm';
import MarkdownViewer from '../components/MarkDownViewer';

// 이걸 불러오기만 해도 하이라이팅이 됨
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';

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

const BlueButton = styled.button`
  background-color: #1e95ff;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
`;

function EditQuestion() {
  const devUrl = process.env.REACT_APP_DEV_URL;
  const { id } = useParams();
  const [question] = useAxios(`${devUrl}/questions/${id}`);
  const [questionData, setQuestionData] = useState(null);
  const [content, setContent] = useState('');
  const editorRef = useRef();
  const navigate = useNavigate();

  // undefined 방지
  useEffect(() => {
    setQuestionData(question);
  }, [question]);

  useEffect(() => {
    if (questionData) setContent(` ${questionData.body}\n${questionData.details}`);
  }, [questionData]);

  // questionData 값이 변경될 때마다 Editor 컴포넌트의 setHTML 메서드를 호출해
  // initialValue 값을 업데이트
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current?.getInstance().setHTML(content);
    }
  }, [editorRef, content]);

  // const handleChange = markdown => {
  //   setContent(markdown);
  // };
  console.log(content);

  return (
    <StyledQuestionContainer>
      <StyledList>
        {questionData && (
          <Editor
            ref={editorRef}
            plugins={[codeSyntaxHighlight]}
            initialValue={content}
            onChange={() => {
              setContent(editorRef.current.getInstance().getHTML());
            }}
            previewStyle="tab"
            height="300px"
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'image', 'link'],
              ['code', 'codeblock'],
            ]}
          />
        )}
      </StyledList>
      <MarkdownViewer content={content} />
    </StyledQuestionContainer>
  );
}

export default EditQuestion;
