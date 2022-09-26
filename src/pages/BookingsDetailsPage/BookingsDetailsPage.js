import './BookingsDetailsPage.scss';
import back from '../../assets/icons/back-arrow.png';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import star from '../../assets/icons/star.png'
import bookingStatus from '../../assets/images/booking-status.png'
import axios from 'axios';

function BookingsDetailsPage({ URL }) {

    let navigate = useNavigate();

    const [bookings, setBookings] = useState(null)

    useEffect(() => {
        axios.get(`${URL}/bookings/details`).then(res => {
            setBookings(res.data)
        })
    }, [])

    return (
        <div className='bookings-details-page'>
            <div className='bookings-details-page__header'>
                <img onClick={() => navigate('/bookings')} src={back} />
                <h1 className='bookings-details-page__title'>Booking details</h1>
            </div>
            {bookings ?
                <div>
                    <div className='bookings-details-page__top'>
                        <img src={`${URL}/${bookings.image}`} />
                        <div className='bookings-details-page__top-right'>
                            <h2 className='bookings-details-page__name'>{bookings.name}</h2>
                            <div className='bookings-details-page__rating'>
                                <img src={star} />
                                <h2 className='bookings-details-page__rating-rate'>{bookings.rating} <span>( {bookings.ratingPool} )</span></h2>
                            </div>
                            {bookings.services.map(service => {
                                return (
                                    <button className='bookings-details-page__service'>{service}</button>
                                )
                            })}
                            <div>
                                <button onClick={() => navigate('/providers/waiting/id')} className='bookings-details-page__view-profile'>View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className='bookings-details-page__dates'>
                        <div className='bookings-details-page__start-date'>
                            <h2>Start Date</h2>
                            <h3>{bookings.startDate}</h3>
                        </div>
                        <div className='bookings-details-page__end-date'>
                            <h2>End Date</h2>
                            <h3>{bookings.endDate}</h3>
                        </div>
                    </div>
                    <div className='bookings-details-page__status'>
                        <h2>Booking Status</h2>
                        <img src={bookingStatus} />
                    </div>
                    <div className='bookings-details-page__details'>
                        <h2>Details</h2>
                        <div className='bookings-details-page__detail'>
                            <h2>Service(s)</h2>
                            <h3>{bookings.servicesDetail}</h3>
                        </div>
                        <div className='bookings-details-page__detail'>
                            <h2>Hours per day</h2>
                            <h3>{bookings.hours}</h3>
                        </div>
                        <div className='bookings-details-page__detail'>
                            <h2>Preferred Language(s)</h2>
                            <h3>{bookings.language}</h3>
                        </div>
                        <div className='bookings-details-page__detail'>
                            <h2>House size</h2>
                            <h3>{bookings.houseSize}</h3>
                        </div>
                        <div className='bookings-details-page__detail'>
                            <h2>Booking reference</h2>
                            <h3>{bookings.reference}</h3>
                        </div>
                    </div>
                </div>
                : <h1>Loading...</h1>}

        </div>
    );

}

export default BookingsDetailsPage;