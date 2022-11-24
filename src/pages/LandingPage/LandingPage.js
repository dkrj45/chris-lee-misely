import './LandingPage.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/logo-landing.png'
import image1 from '../../assets/images/landing-image-1.png'
import image2 from '../../assets/images/landing-image-2.png'
import image3 from '../../assets/images/landing-image-3.png'
import image4 from '../../assets/images/landing-image-4.png'

function LandingPage({ url }) {

    const navigate = useNavigate();

    const [radioButton1, setRadioButton1] = useState(true)
    const [radioButton2, setRadioButton2] = useState(false)
    const [radioButton3, setRadioButton3] = useState(false)
    const [radioButton4, setRadioButton4] = useState(false)

    const clickController1 = () => {
        setRadioButton1(true);
        setRadioButton2(false);
        setRadioButton3(false);
        setRadioButton4(false);

    }

    const clickController2 = () => {
        setRadioButton1(false);
        setRadioButton2(true);
        setRadioButton3(false);
        setRadioButton4(false);
        
    }

    const clickController3 = () => {
        setRadioButton1(false);
        setRadioButton2(false);
        setRadioButton3(true);
        setRadioButton4(false);
    }

    const clickController4 = () => {
        setRadioButton1(false);
        setRadioButton2(false);
        setRadioButton3(false);
        setRadioButton4(true);
    }

    return (
        <div className='landing-page'>
            <img onClick={() => navigate('/welcome')} className='landing-page__logo' src={logo} alt='Misely Logo' />
            <div className='landing-page__frame'>
                <div className={`
                ${radioButton1 ? 'landing-page__images--1' : 'landing-page__images'}
                ${radioButton2 ? 'landing-page__images--2' : 'landing-page__images'}
                ${radioButton3 ? 'landing-page__images--3' : 'landing-page__images'}
                ${radioButton4 ? 'landing-page__images--4' : 'landing-page__images'}
                `}>
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />
                    <img src={image4} />
                </div>
            </div>
            <div className='landing-page__radio-buttons'>
                <button onClick={clickController1} className={radioButton1 ? 'landing-page__radio-button--featured' : 'landing-page__radio-button'}></button>
                <button onClick={clickController2} className={radioButton2 ? 'landing-page__radio-button--featured' : 'landing-page__radio-button'}></button>
                <button onClick={clickController3} className={radioButton3 ? 'landing-page__radio-button--featured' : 'landing-page__radio-button'}></button>
                <button onClick={clickController4} className={radioButton4 ? 'landing-page__radio-button--featured' : 'landing-page__radio-button'}></button>
            </div>
            <div className='landing-page__buttons'>
                <button onClick={() => navigate('/login')} className='landing-page__login-button'>Log in</button>
                <button onClick={() => navigate('/signup')} className='landing-page__sign-up-button'>Sign up</button>
            </div>
        </div>
    );
}

export default LandingPage;