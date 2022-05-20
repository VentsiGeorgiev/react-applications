import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<SingIn />} />
          <Route path='/sign-in' element={<SingIn />} />
          <Route path='/sing-up' element={<SingUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

        </Routes>
        <Navbar />

      </Router>
    </>
  )
}

export default App;
