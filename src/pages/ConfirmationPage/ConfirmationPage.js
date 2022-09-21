import './ConfirmationPage.scss';
import { useNavigate } from 'react-router-dom';
import confirmation from '../../assets/images/confirmation.png'

function ConfirmationPage() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='confirmation-page__header'>
                <h1 className='confirmation-page__title'>Confirmation</h1>
            </div>
            <div className='confirmation-page-container'>
                <img src={confirmation} />
                <h2>Request Received</h2>
                <p>We have received your booking request. Your booking is not confirmed until the provider accepts your request (within 24 hours). You won’t be charged until then. </p>
            </div>
            <div className='confirmation-page__footer'>
            <button onClick={() => navigate('/home')} className='confirmation-page__footer-home'>Home</button>
                <button onClick={() => navigate('/bookings/details')} className='confirmation-page__footer-details'>View details</button>
            </div>
        </div>

    );

}

export default ConfirmationPage;