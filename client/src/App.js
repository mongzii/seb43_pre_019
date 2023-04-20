import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Questions from './pages/Questions';
import Question from './pages/Question';
import AskQuestion from './pages/AskQuestion';
import MyPages from './pages/MyPages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/questions/ask" element={<AskQuestion />} />
        <Route path="/mypages" element={<MyPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
