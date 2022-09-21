import './PaymentPage.scss';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back-arrow.png';

function PaymentPage() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='payment-page__header'>
                <img onClick={() => navigate('/availability')} src={back} />
                <h1 className='payment-page__title'>Price Details</h1>
            </div>
            <div className='payment-page-container'>
                <div className='payment-page__calculation'>
                    <h3 className='payment-page__texts'>$35.00 x 4 hours x 5 days</h3>
                    <h3 className='payment-page__texts'>$700</h3>
                </div>
                <div className='payment-page__calculation'>
                    <h3 className='payment-page__texts'>Service Fee</h3>
                    <h3 className='payment-page__texts'>$70</h3>
                </div>
                <div className='payment-page__calculation'>
                    <h3 className='payment-page__texts'>Taxes & Fees</h3>
                    <h3 className='payment-page__texts'>$91</h3>
                </div>
                <div className='payment-page__calculation'>
                    <h3 className='payment-page__texts--featured'>First Booking Discount</h3>
                    <h3 className='payment-page__texts--featured'>-$50</h3>
                </div>
                <div className='payment-page__calculation'>
                    <h3 className='payment-page__texts--total'>Total</h3>
                    <h3 className='payment-page__texts--total'>$811</h3>
                </div>
                <div className='payment-page__card'>
                    <h2 className='payment-page__card-title'>Card number</h2>
                    <input placeholder='5261 4141 0151 8472' type="text" className='payment-page__card-number'></input>
                </div>
                <div className='payment-page__card'>
                    <h2 className='payment-page__card-title'>Cardholder name</h2>
                    <input placeholder='Isaac Edwards' type="text" className='payment-page__cardholder'></input>
                </div>
                <div className='payment-page__card-others'>
                    <div className='payment-page__card'>
                        <h2 className='payment-page__card-title'>Expiry date</h2>
                        <input placeholder='06 / 2024' type="text" className='payment-page__card-other'></input>
                    </div>
                    <div className='payment-page__card'>
                        <h2 className='payment-page__card-title'>CVV / CVC</h2>
                        <input placeholder='915' type="text" className='payment-page__card-other'></input>
                    </div>
                </div>
                <p className='payment-page__message'>We will send you an order details to your email after the successfull payment</p>
            </div>
            <div className='payment-page__footer'>
                <button onClick={() => navigate('/confirmation')} className='payment-page__footer-button'>Request to book</button>
            </div>
        </div>

    );

}

export default PaymentPage;