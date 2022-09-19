import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';

function App() {

  const URL = process.env.REACT_APP_URL || "https://misely-server.herokuapp.com";

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/welcome' />}></Route>
            <Route path='/welcome' element={<WelcomePage />}></Route>
            <Route path='/landing' element={<LandingPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
            <Route path='/home' element={<HomePage URL={URL} />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
