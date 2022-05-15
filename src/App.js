import './style.css';
import { useState } from "react";
import ToDoList from './components/ToDoList';
import Form from './components/Form';
import Buttons from './components/Buttons';

export default function App() {
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('ALL');
  const themeIcons = ['assets/icon-sun.svg', 'assets/icon-moon.svg'];

  const handleChange = (value) => {
    setTask(value);
  }

  const changeTheme = () => {
    document.querySelector('html').classList.toggle('light');
    if(document.querySelector('html').classList.contains('light')){
      document.getElementById('theme-icon').src = themeIcons[1];
      return;
    }
    document.getElementById('theme-icon').src = themeIcons[0];
  }

  return(
    <div className='App'>
      <div>
        <header>
          <h1>Todo</h1>
          <img src={themeIcons[0]} width='25' height='25' onClick={(e) => changeTheme(e)} id="theme-icon"></img>
        </header>
        <Form task = {task} setTask={handleChange}/>
        <ToDoList filter={filter}/>
        <Buttons setFilter={setFilter}/>
      </div>
    </div>
  )
}
