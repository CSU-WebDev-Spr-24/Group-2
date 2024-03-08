import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {DndProvider} from 'react-dnd';
//import { HTML5Backend } from 'react-dnd-html5-backend';
import {  createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Start from './pages/Start';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start/>,
  },
  {
    path: "/main",
    element: <Main/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
