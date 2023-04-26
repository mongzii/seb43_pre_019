import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Questions from './pages/Questions';
import Question from './pages/Question';
import AskQuestion from './pages/AskQuestion';
<<<<<<< HEAD
import EditQuestion from './pages/EditQuestion';
=======
import MyPages from './pages/MyPages';
>>>>>>> ba49bfd6dd4a57928ff64f995207945634279505

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/ask" element={<AskQuestion />} />
<<<<<<< HEAD
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/questions/:id/edit" element={<EditQuestion />} />
=======
        <Route path="/mypages" element={<MyPages />} />
>>>>>>> ba49bfd6dd4a57928ff64f995207945634279505
      </Routes>
    </BrowserRouter>
  );
}

export default App;
