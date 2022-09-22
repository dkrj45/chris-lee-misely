import './ProviderPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import axios from 'axios'
import back from '../../assets/icons/back-arrow.png';
import star from '../../assets/icons/star.png'
import doula from '../../assets/icons/doulas.png'
import housework from '../../assets/icons/housework.png'
import massage from '../../assets/icons/massage.png'

function ProviderPageWaiting({ URL }) {

    let { id } = useParams();

    let navigate = useNavigate();

    let [provider, setProvider] = useState(null)

    useEffect(() => {
        axios.get(`${URL}/providers/64450fa1-a338-414e-a71e-6bc8cb984a2e`)
            .then(res => {
                setProvider(res.data)
            }, [id])
    })

    if (!id) {
        return <NotFoundPage />
    }

    if (!provider) {
        return <h1>Loading...</h1>
    }

    let starGenerator = (number) => {
        let dummy = []
        for (let i = 0; i < number; i++) {
            dummy.push(<img src={star} />)
        }

        return dummy
    }

    return (
        <div className='provider-page'>
            <div className='provider-page__header'>
                <img onClick={() => navigate('/bookings/details')} src={back} />
                <h1 className='provider-page__title'>Profile</h1>
            </div>
            <img className='provider-page__image' src={`${URL}/${provider.image}`} />
            <div className='provider-page__basic'>
                <h2 className='provider-page__name'>{provider.name}</h2>
                <h3 className='provider-page__distance'>{provider.distance}<br />{provider.location}</h3>
            </div>
            <div className='provider-page__rating'>
                <img src={star} />
                <h3>{provider.rating} <span>({provider.ratingPool})</span></h3>
            </div>
            <div className='provider-page__extra'>
                <div className='provider-page__extra-each'>
                    <h3>{provider.years}</h3>
                    <p>Years of<br />Experience</p>
                </div>
                <div className='provider-page__extra-each'>
                    <h3>From ${provider.wage}</h3>
                    <p>Hourly Rate</p>
                </div>
                <div className='provider-page__extra-each'>
                    <h3>{provider.response}%</h3>
                    <p>Response Rate</p>
                </div>
            </div>
            <div className='provider-page__services'>
                <h2 className='provider-page__services-title'>Services</h2>
                <div className='provider-page__service'>
                    <img src={doula} />
                    <div className='provider-page__service-description'>
                        <h3>Doula</h3>
                        <p>You'll get guidance on how to take care of your newborn</p>
                    </div>
                </div>
                <div className='provider-page__service'>
                    <img src={housework} />
                    <div className='provider-page__service-description'>
                        <h3>Housework</h3>
                        <p>The provider will clean your house, do laundry and cook healthy food for you</p>
                    </div>
                </div>
                <div className='provider-page__service'>
                    <img src={massage} />
                    <div className='provider-page__service-description'>
                        <h3>Massage Therapy</h3>
                        <p>Eases muscle aches, reduces swelling and relaxes your mind</p>
                    </div>
                </div>
            </div>
            <div className='provider-page__languages'>
                <h2>Languages</h2>
                <div className='provider-page__language'>
                    <h2>English</h2>
                    <p>Native or Bilingual Proficiency</p>
                </div>
                <div className='provider-page__language'>
                    <h2>French</h2>
                    <p>Limited Working Proficiency</p>
                </div>
            </div>
            <div className='provider-page__about'>
                <h2>About</h2>
                <p>My name is Laura. After 3 years of college I worked in several daycare where I utilized my knowledge in the infant, toddle and school age rooms. After working in daycare centres I dedicated more than 10 years of my life working as a full and part-time nanny, taking care of newborns, toddlers and school age children. I am also trained with Dona international as a Birth and Postpartum Doula.  More over, I now Coach families with everyday parenting challenges. As a Nanny, Babysitter, Doula and Parenting Coach I encourages Compassion, Understanding, Team Work, A Judgment Free Space, Good Communication Skills, Open Mindedness, Creativity, Love and Respect.</p>
            </div>
            <div className='provider-page__reviews'>
                <h2>Reviews</h2>
                {provider.reviews.map(review => {
                    return (
                        <div className='provider-page__review'>
                            <img src={`${URL}/${review.image}`} />
                            <div className='provider-page__review-text'>
                                <div className='provider-page__review-text-title'>
                                    <h2>{review.name}</h2>
                                    {starGenerator(review.stars)}
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className='provider-page__footer-waiting-button'>Waiting for Confirmation</button>
        </div>
    );

}

export default ProviderPageWaiting;