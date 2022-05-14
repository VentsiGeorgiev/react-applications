import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>

        <Router>
          <Navbar />

          <main className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </Router>

      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
