import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Questions from './pages/Questions';
import Question from './pages/Question';
import AskQuestion from './pages/AskQuestion';
import MyPages from './pages/MyPages';
import EditQuestion from './pages/EditQuestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/ask" element={<AskQuestion />} />
        <Route path="/mypages" element={<MyPages />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/questions/:id/edit" element={<EditQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
