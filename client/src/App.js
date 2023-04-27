import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import
// import styled from 'styled-components';

// import Template from './components/Template';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Questions from './pages/Questions';
import Question from './pages/Question';
import AskQuestion from './pages/AskQuestion';
import MyPages from './pages/MyPages';
import MyPagesActivity from './pages/MyPagesActivity';
import EditQuestion from './pages/EditQuestion';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path="/mypages" element={<MyPages />} />
        <Route path="/mypages/activity" element={<MyPagesActivity />} />
        <Route path="/login" element={<LogIn setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/ask" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/questions/:id/edit" element={<EditQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
