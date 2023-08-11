import './App.css';
import Footer from './components/footer/footer';
import List from './components/todo-list/list';
import addImg from './images/add.png'
import { useState } from 'react';
function App() {

  const [inpVal, setInpVal] = useState('')
  const [todos, setTodo] = useState([])
  const dltTodo = (arr) => {
    setTodo([...arr])
  }
  const clrAll = () => {
    setTodo([])
  }
  const editTodo = (i) => {

    setInpVal(todos[i])
    console.log(i)
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
            if (inpVal.trim() !== '') {

              setTodo([inpVal, ...todos])
              setInpVal("")
            }
          }}><img src={addImg} alt='add' />
          </button>
        </div>
        <List value={todos} dlttodo={dltTodo} edittodo={editTodo} />
        <Footer clrAll={clrAll} />
      </div>
    </div>
  );
}

export default App;