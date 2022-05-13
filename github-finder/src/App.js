import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>

      <Navbar />

      <main>Content</main>

      <Footer />


    </Router>
  );
}

export default App;
