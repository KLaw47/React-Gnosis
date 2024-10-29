import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Greeting from './components/Greeting';
import Quote from './components/Quote';
import { useState } from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to React Fundamentals</h2>
      <p>Select a challenge to get started.</p>
    </div>
  );
}

function App() {
  const [name, setName] = useState("Beans");

  return (
    <div className="App">
    <header className="App-header">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <nav>
        <ul>
          <li><Link to="/counter">Counter Challenge</Link></li>
          <li><Link to="/todo">To-Do List Challenge</Link></li>
          <li><Link to="/greeting">Greeting Challenge</Link></li>
          <li><Link to="/Quote">Quote of the day</Link></li>
          {/* Add more links as you create new challenges */}
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/greeting" element={<Greeting name={name}/>} />
    </Routes>

  </div>
  );
}

export default App;
