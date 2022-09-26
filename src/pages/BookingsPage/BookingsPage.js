import './BookingsPage.scss';
import noBookings from '../../assets/images/no-bookings.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import homeTab from '../../assets/icons/home-tab.png'
import providersTab from '../../assets/icons/providers-tab.png'
import bookingsTab from '../../assets/icons/bookings-tab-featured.png'
import messagesTab from '../../assets/icons/messages-tab.png'
import groupsTab from '../../assets/icons/groups-tab.png'
import star from '../../assets/icons/star.png'
import axios from 'axios';

function BookingsPage({ URL }) {

    let navigate = useNavigate();

    const [leftButton, setLeftButton] = useState(true)
    const [rightButton, setRightButton] = useState(false)
    const [bookings, setBookings] = useState(null)

    const inDevelopment = () => {
        return alert("This feature is currently being developed")
    }

    const leftClick = () => {
        setRightButton(false);
        setLeftButton(true);
    }

    const rightClick = () => {
        setRightButton(true);
        setLeftButton(false);
    }

    useEffect(() => {
        axios.get(`${URL}/bookings`).then(res => {
            setBookings(res.data)
        })
    }, [])

    return (
        <div className='bookings-page'>
            <div className='bookings-page__header'>
                <h1 className='bookings-page__title'>Bookings</h1>
            </div>
            <div className='bookings-page-container'>
                <div className='bookings-page__buttons'>
                    <button onClick={leftClick} className={leftButton ? `bookings-page__button-left--featured` : `bookings-page__button-left`}>Upcoming</button>
                    <button onClick={rightClick} className={rightButton ? `bookings-page__button-right--featured` : `bookings-page__button-right`}>Previous</button>
                </div>
                {leftButton ?
                    <div className='bookings-page__upcoming'>
                        {bookings ?
                            bookings.map(booking => {
                                return (
                                    <div onClick={()=>navigate('/bookings/details')} className='bookings-page__booking'>
                                        <img className='bookings-page__booking-image' src={`${URL}/${booking.image}`} />
                                        <div className='bookings-page__booking-right'>
                                            <div className='bookings-page__booking-title'>
                                                <h2>{booking.name}</h2>
                                                <button className={booking.status === "PENDING" ? 'bookings-page__booking-status' : 'bookings-page__booking-status--featured'}>{booking.status}</button>
                                            </div>
                                            <div className='bookings-page__booking-rating'>
                                                <img src={star} />
                                                <h2 className='bookings-page__booking-rating-rate'>{booking.rating} <span>( {booking.ratingPool} )</span></h2>
                                            </div>
                                            {booking.services.map(service => {
                                                return (
                                                    <button className='bookings-page__booking-service'>{service}</button>
                                                )
                                            })}
                                            <h2 className='bookings-page__booking-duration'>{booking.duration}</h2>
                                        </div>
                                    </div>
                                )
                            })
                            : <h2>Loading...</h2>}
                    </div>
                    :
                    <div className='bookings-page__previous'>
                        <img src={noBookings} />
                    </div>}
            </div>
            <div className='bookings-page__footer-navigation'>
                <div onClick={() => navigate('/home')} className='bookings-page__footer-tab'><img src={homeTab} /></div>
                <div onClick={() => navigate('/providers')} className='bookings-page__footer-tab'><img src={providersTab} /></div>
                <div className='bookings-page__footer-tab'><img src={bookingsTab} /></div>
                <div onClick={() => navigate('/messages')} className='bookings-page__footer-tab--special'><img src={messagesTab} /></div>
                <div onClick={inDevelopment} className='bookings-page__footer-tab'><img src={groupsTab} /></div>
            </div>
        </div>
    );

}

export default BookingsPage;