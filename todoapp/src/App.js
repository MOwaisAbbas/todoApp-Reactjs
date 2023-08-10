import './App.css';
import Footer from './components/footer/footer';
import List from './components/todo-list/list';
import addImg from './images/add.png'
import { useState } from 'react';
function App() {

  const [inpVal, setInpVal] = useState('')
  const [todos, setTodo] = useState([])
const editTodo = (arr)=>{
  console.log(todos)
  setTodo(arr)
  console.log(arr)
  console.log(todos)
}

  return (
    <div className="App">
      <div className='main-div'>
        <div>
          <h1>TodoApp</h1>
        </div>
        <div className='input-div'>
          <input type='text' value={inpVal} onChange={(e) => {
            setInpVal(e.target.value)

          }} name='todo-input' id='todo-input' />
          <button onClick={() => {
            setTodo([inpVal ,...todos])
            setInpVal("")
          }}><img src={addImg} alt='add' />
          </button>
        </div>
        <List value={todos} again={editTodo} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
