import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Greeting from './components/Greeting';

function Home() {
  return (
    <div>
      <h2>Welcome to React Fundamentals</h2>
      <p>Select a challenge to get started.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <header className="App-header">

      <nav>
        <ul>
          <li><Link to="/counter">Counter Challenge</Link></li>
          <li><Link to="/todo">To-Do List Challenge</Link></li>
          <li><Link to="/greeting">Greeting Challenge</Link></li>
          {/* Add more links as you create new challenges */}
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>

  </div>
  );
}

export default App;
