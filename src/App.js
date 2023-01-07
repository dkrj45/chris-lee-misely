import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import ProvidersPage from './pages/ProvidersPage/ProvidersPage';
import BookingsPage from './pages/BookingsPage/BookingsPage';
import BookingsDetailsPage from './pages/BookingsDetailsPage/BookingsDetailsPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import ProviderPage from './pages/ProviderPage/ProviderPage';
import ProviderPageWaiting from './pages/ProviderPage/ProviderPageWaiting';
import AvailabilityPage from './pages/AvailabilityPage/AvailabilityPage';
import RequestPage from './pages/RequestPage/RequestPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import MessagesDetailsPage from './pages/MessagesDetailsPage/MessagesDetailsPage';

function App() {

  const URL = process.env.REACT_APP_URL || "https://server.chanholee.com";

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
            <Route path='/providers' element={<ProvidersPage URL={URL} />}></Route>
            <Route path='/providers/:id' element={<ProviderPage URL={URL} />}></Route>
            <Route path='/providers/waiting/:id' element={<ProviderPageWaiting URL={URL}/>}></Route>
            <Route path='/bookings' element={<BookingsPage URL={URL} />}></Route>
            <Route path='/bookings/details' element={<BookingsDetailsPage URL={URL} />}></Route>
            <Route path='/messages' element={<MessagesPage URL={URL} />}></Route>
            <Route path='/messages/details' element={<MessagesDetailsPage />}></Route>
            <Route path='/availability' element={<AvailabilityPage />}></Route>
            <Route path='/request' element={<RequestPage />}></Route>
            <Route path='/payment' element={<PaymentPage />}></Route>
            <Route path='/confirmation' element={<ConfirmationPage />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
