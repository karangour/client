import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './FormComponent';
import CustomPage from './CustomPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/custom-page" element={<CustomPage />} />
      </Routes>
    </Router>
  );
}

export default App;

