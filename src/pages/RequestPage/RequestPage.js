import './RequestPage.scss';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back-arrow.png';
import { useState } from 'react';

function RequestPage() {

    const navigate = useNavigate();

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);
    const [toggle7, setToggle7] = useState(false);
    const [toggle8, setToggle8] = useState(false);
    const [toggle9, setToggle9] = useState(false);
    const [toggle10, setToggle10] = useState(false);

    const toggleAnswer1 = () => {
        if(!toggle1){
            setToggle1(true);
        }
        else {
            setToggle1(false);
        }
    }

    const toggleAnswer2 = () => {
        if(!toggle2){
            setToggle2(true);
        }
        else {
            setToggle2(false);
        }
    }

    const toggleAnswer3 = () => {
        if(!toggle3){
            setToggle3(true);
        }
        else {
            setToggle3(false);
        }
    }

    const toggleAnswer4 = () => {
        if(!toggle4){
            setToggle4(true);
            setToggle5(false)
        }
        else {
            setToggle4(false);
        }
    }

    const toggleAnswer5 = () => {
        if(!toggle5){
            setToggle5(true);
            setToggle4(false)
        }
        else {
            setToggle5(false);
        }
    }

    const toggleAnswer6 = () => {
        if(!toggle6){
            setToggle6(true);
            setToggle7(false)
            setToggle8(false)
        }
        else {
            setToggle6(false);
        }
    }

    const toggleAnswer7 = () => {
        if(!toggle7){
            setToggle7(true);
            setToggle6(false)
            setToggle8(false)
        }
        else {
            setToggle7(false);
        }
    }

    const toggleAnswer8 = () => {
        if(!toggle8){
            setToggle8(true);
            setToggle7(false)
            setToggle6(false)
        }
        else {
            setToggle8(false);
        }
    }

    const toggleAnswer9 = () => {
        if(!toggle9){
            setToggle9(true);
            setToggle10(false)
        }
        else {
            setToggle9(false);
        }
    }

    const toggleAnswer10 = () => {
        if(!toggle10){
            setToggle10(true);
            setToggle9(false)
        }
        else {
            setToggle10(false);
        }
    }

    return (
        <div className='request-page'>
            <div className='request-page__header'>
                <img onClick={() => navigate('/availability')} src={back} />
                <h1 className='request-page__title'>Request to book</h1>
            </div>
            <div className='request-page-container'>
                <div className='request-page__qna'>
                    <p className='request-page__question'>What type of service do you need from the provider? Select all that applies.</p>
                    <div className='request-page__answer'>
                        <button onClick={toggleAnswer1} className={toggle1?"request-page__answer-button--featured" :"request-page__answer-button"}>Housework</button>
                        <button onClick={toggleAnswer2} className={toggle2?"request-page__answer-button--featured" :"request-page__answer-button"}>Doula</button>
                        <button onClick={toggleAnswer3} className={toggle3?"request-page__answer-button--featured" :"request-page__answer-button"}>Massage Therapy</button>
                    </div>
                </div>
                <div className='request-page__qna'>
                    <p className='request-page__question'>Do you have another child at home?</p>
                    <div className='request-page__answer'>
                        <button onClick={toggleAnswer4} className={toggle4?"request-page__answer-button--featured" :"request-page__answer-button"}>Yes</button>
                        <button onClick={toggleAnswer5} className={toggle5?"request-page__answer-button--featured" :"request-page__answer-button"}>No</button>
                    </div>
                </div>
                <div className='request-page__qna'>
                    <p className='request-page__question'>Estimated size of your house (for housework only)?</p>
                    <div className='request-page__answer'>
                        <input type="text" className="request-page__answer-field"></input>
                        <p>sqft</p>
                    </div>
                </div>
                <div className='request-page__qna'>
                    <p className='request-page__question'>How many hours of service do you need per day?</p>
                    <div className='request-page__answer'>
                        <button onClick={toggleAnswer6} className={toggle6?"request-page__answer-button--featured" :"request-page__answer-button"}>4 Hours</button>
                        <button onClick={toggleAnswer7} className={toggle7?"request-page__answer-button--featured" :"request-page__answer-button"}>6 Hours</button>
                        <button onClick={toggleAnswer8} className={toggle8?"request-page__answer-button--featured" :"request-page__answer-button"}>8 Hours</button>
                    </div>
                </div>
                <div className='request-page__qna'>
                    <p className='request-page__question'>Which language do you prefer to speak with the provider?</p>
                    <div className='request-page__answer'>
                        <button onClick={toggleAnswer9} className={toggle9?"request-page__answer-button--featured" :"request-page__answer-button"}>English</button>
                        <button onClick={toggleAnswer10} className={toggle10?"request-page__answer-button--featured" :"request-page__answer-button"}>French</button>
                    </div>
                </div>
                <div className='request-page__qna'>
                    <p className='request-page__question'>Message the provider</p>
                    <textarea className='request-page__answer-message' placeholder='Hi! I need help with...'></textarea>
                </div>
            </div>
            <div className='request-page__footer'>
                <button onClick={()=>navigate('/payment')} className='request-page__footer-button'>Continue to payment</button>
            </div>
        </div>
    );

}

export default RequestPage;