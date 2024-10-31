import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
          {/* Add routes for other pages */}
        </Routes>
      </main>

      <footer>
        <p>
          <a href="/contact" className="footer-link">Contact</a>
        </p>
      </footer>
      
    </div>
  );
}

export default App;
