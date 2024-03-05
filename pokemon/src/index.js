import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Start from './pages/Start';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<Start/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </DndProvider>
  </React.StrictMode>
);
