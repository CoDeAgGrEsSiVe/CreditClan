import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Todo from './components/Todo'
import {DndProvider} from "react-dnd"; 
import {HTML5Backend} from "react-dnd-html5-backend";


ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Todo />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);