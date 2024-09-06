import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path= "/" element = {< div > Home < /div>} / >
            <Route path="/about" element = {< div > About < /div>} / >
                </Routes>
                </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
