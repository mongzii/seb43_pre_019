import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';
import useAxios from '../services/useAxios';
import { axiosPatch } from '../services/api';
import useInput from '../services/useInput';
import StyledList from '../styles/StyledList';
import { Input } from '../components/feat/Input';

import MarkdownViewer from '../components/feat/MarkDownViewer';

// 이걸 불러오기만 해도 하이라이팅이 됨
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  padding: 24px;
  width: 100%;
  .ask-sidebar {
    margin: 0 0 15px 24px;
    background-color: hsl(47, 87%, 94%);
    border: 1px solid hsl(47, 65%, 84%);
    border-radius: 5px;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    height: fit-content;
    .sidebar-header {
      background-color: hsl(47, 83%, 91%);
      padding: 12px 15px;
      font-size: 0.9rem;
    }
    .sidebar-body {
      padding: 4px 15px;
      font-size: 0.8rem;
      li {
        margin: 12px 0;
      }
    }
  }
`;

const StyledInputForm = styled.form`
  /* border-left: 1px solid hsl(210, 8%, 85%); */
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 16px;
    margin-bottom: 4px;
  }

  width: calc(100% - 365px - 24px);

  input {
    height: 30px;
    width: 100% !important;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    :focus {
      border: 1px solid #59a4de;
    }
  }
  > textarea {
    height: 200px;
  }
  .title-wrap {
    margin-bottom: 14px;
  }
  /* > button {
    margin-top: 20px;
    width: 80px;
  } */
  .form-submit {
    margin-left: 4px;
    margin-right: 4px;
    padding: 10px 0 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    .cancel-button {
      background-color: transparent;
      border: none;
      color: hsl(206, 100%, 40%);
      padding: 10.4px;
      :hover {
        background-color: #eff8ff;
      }
    }
  }
  .comments-link {
    a {
      text-decoration: none;
      font-size: 13px;
      color: hsl(206, 100%, 40%);
    }
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

  margin: 0 -4px 0 -4px;
  :hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

function EditQuestion() {
  const devUrl = process.env.REACT_APP_DEV_URL;
  const { id } = useParams();
  const { questions } = useAxios(`${devUrl}/questions/${id}`);
  const [questionData, setQuestionData] = useState(null);
  const [content, setContent] = useState('');
  const editorRef = useRef();
  const titleBind = useInput('');

  // undefined 방지
  useEffect(() => {
    setQuestionData(questions);
  }, [questions]);

  // content 업데이트
  useEffect(() => {
    if (questionData) setContent(` ${questionData.body}`);
  }, [questionData]);

  // console.log(content);

  // questionData 값이 변경될 때마다 Editor 컴포넌트의 setHTML 메서드를 호출해
  // initialValue 값 업데이트
  useEffect(() => {
    if (editorRef.current && questionData) {
      const editor = editorRef.current.getInstance();
      // 에디터 초기값 설정
      editor.setHTML(`${questionData.body}`);
    }
    // 처음 한 번만 설정해준다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionData]);

  // 생각해보니 edit 할 때는 editor에 body와 details가 합쳐진 형태가 들어간다.
  // 그러므로, post할 때 프론트에서 body와 details를 합쳐서 보내고,
  // back에서는 body만 응답으로 보내줘야 한다.

  const handleSubmit = e => {
    e.preventDefault();
    const value = editorRef.current?.getInstance().getHTML();
    const editedData = {
      title: titleBind.curValue,
      body: value,
    };
    axiosPatch(`${devUrl}/questions/${id}`, editedData, id);
  };

  return (
    <StyledContainer>
      <StyledInputForm onSubmit={handleSubmit}>
        <div className="title-wrap">
          <h2>Title</h2>
          {questionData && <Input value={titleBind} onChange={titleBind.onChange} />}
        </div>
        <div className="body-wrap">
          <h2>Body</h2>
          {content && (
            <Editor
              ref={editorRef}
              plugins={[codeSyntaxHighlight]}
              /*
              initialValue에 content를 넣어놓으면
              밑에서 setContent를 할 때마다 initialValue가 바뀌기 때문에
              로직이 꼬인다. 무한 입력 가능성 존재
              그러므로 initialValue를 비워두고,
              useEffect를 이용해 setHTML로 원하는 비동기 데이터를 넣어준다. 
            */
              initialValue=""
              onChange={() => {
                setContent(editorRef.current.getInstance().getHTML().toString());
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
        </div>
        <MarkdownViewer content={content} />
        <div className="form-submit">
          <BlueButton type="submit">Save edits</BlueButton>
          <div className="cancel-wrap">
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
        <div className="comments-link">
          <a href="/">Add a comment</a>
        </div>
      </StyledInputForm>
      <div className="ask-sidebar">
        <div className="yellow-box">
          <div className="sidebar-header">How to Edit</div>
          <div className="sidebar-body">
            <li>Correct minor typos or mistakes</li>
            <li>Correct minor typos or mistakes</li>
            <li>Correct minor typos or mistakes</li>
            <li>Correct minor typos or mistakes</li>
            <li>Correct minor typos or mistakes</li>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default EditQuestion;
