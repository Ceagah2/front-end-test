import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import QuestionOne from './Pages/QuestionOne';
import QuestionTwo from './Pages/QuestionTwo';
import QuestionThree from './Pages/QuestionThree';
import QuestionFour from './Pages/QuestionFour';
import QuestionFive from './Pages/QuestionFive';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionOne" element={<QuestionOne />} />
        <Route path="/questionTwo" element={<QuestionTwo />} />
        <Route path="/questionThree" element={<QuestionThree />} />
        <Route path="/questionFour" element={<QuestionFour />} />
        <Route path="/questionFive" element={<QuestionFive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;