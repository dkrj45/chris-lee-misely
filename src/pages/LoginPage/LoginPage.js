import './LoginPage.scss'
import backIcon from '../../assets/icons/back.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <div className='login-page'>
            <img onClick={()=>navigate('/landing')} className='login-page__back' src={backIcon} />
            <h1 className='login-page__title'>Log in</h1>
            <form className='login-page__form'>
                <label>
                    <input placeholder='Email' className='login-page__email' type='email' name='email'></input>
                </label>
                <label>
                    <input placeholder='Password' className='login-page__email' type='email' name='email'></input>
                </label>
                <button onClick={()=>navigate('/home')} className='login-page__button'>Continue</button>
            </form>
            <h2 className='login-page__or'><span>OR</span></h2>
            <button onClick={()=>navigate('/home')} className='login-page__continue1'>Continue with Apple</button>
            <button onClick={()=>navigate('/home')} className='login-page__continue2'>Continue with Google</button>
            <button onClick={()=>navigate('/home')} className='login-page__continue3'>Continue with Facebook</button>
        </div>
    )

}

export default LoginPage;