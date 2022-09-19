import './WelcomePage.scss';
import logo from '../../assets/icons/logo-welcome.png';
import {useNavigate} from 'react-router-dom';

function WelcomePage() {

    let navigate = useNavigate();

    const clickHandler = () => {
        navigate('/landing')
    }

    return (
        <div onClick={clickHandler} className='welcome-page'>
            <img src={logo} alt='Logo' />
            <p>Please click anywhere to begin.</p>
        </div>
    );

  }
  
  export default WelcomePage;