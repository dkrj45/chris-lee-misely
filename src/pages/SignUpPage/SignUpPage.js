import './SignUpPage.scss'
import backIcon from '../../assets/icons/back.png'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {

    const navigate = useNavigate();

    return (
        <div className='sign-up-page'>
            <img onClick={()=>navigate('/landing')} className='sign-up-page__back' src={backIcon} />
            <h1 className='sign-up-page__title'>Sign Up</h1>
            <form className='sign-up-page__form'>
                <label>
                    <h2 className='sign-up-page__label'>First Name</h2>
                    <input placeholder='Jenny' className='sign-up-page__input' type='email' name='email'></input>
                </label>
                <label>
                    <h2 className='sign-up-page__label'>Last Name</h2>
                    <input placeholder='Stevenson' className='sign-up-page__input' type='email' name='email'></input>
                </label>
                <label>
                    <h2 className='sign-up-page__label'>Birthday (mm/dd/yyyy)</h2>
                    <input placeholder='05/12/1987' className='sign-up-page__input' type='email' name='email'></input>
                </label>
                <label>
                    <h2 className='sign-up-page__label--featured'>Email</h2>
                    <input placeholder='jenny.s@gmail.com' className='sign-up-page__input' type='email' name='email'></input>
                </label>
                <label>
                    <h2 className='sign-up-page__label'>Password</h2>
                    <input placeholder='••••••••••••' className='sign-up-page__input' type='email' name='email'></input>
                </label>
                    <p className='sign-up-page__disclaimer'>By continuing, you agree to Misely’s <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
                    <button onClick={()=>navigate('/home')} className='sign-up-page__button'>Sign Up</button>
            </form>
            
        </div>
    )

}

export default SignUpPage;