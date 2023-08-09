import './App.css';
import Footer from './components/footer/footer';
import List from './components/todo-list/list';
import addImg from './images/add.png'

function App() {
  return (
    <div className="App">
      <div className='main-div'>
        <div>
          <h1>TodoApp</h1>
        </div>
        <div className='input-div'>

          <input type='text' name='todo-input' id='todo-input' />
          <button><img src={addImg} alt='add' />
          </button>
        </div>
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
