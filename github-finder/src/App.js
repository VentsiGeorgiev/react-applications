import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>

      <Navbar />



      <main>Content</main>
    </Router>
  );
}

export default App;
