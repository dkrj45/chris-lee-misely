import './HomePage.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../assets/icons/logo-home.png'
import profilePicture from '../../assets/icons/profile-picture-home.png'
import housework from '../../assets/icons/housework.png'
import doulas from '../../assets/icons/doulas.png'
import massage from '../../assets/icons/massage.png'
import lactation from '../../assets/icons/lactation.png'
import mentalHealth from '../../assets/icons/mental-health.png'
import star from '../../assets/icons/star.png'
import homeTab from '../../assets/icons/home-tab-featured.png'
import providersTab from '../../assets/icons/providers-tab.png'
import bookingsTab from '../../assets/icons/bookings-tab.png'
import messagesTab from '../../assets/icons/messages-tab.png'
import groupsTab from '../../assets/icons/groups-tab.png'
import { v4 as uuidv4 } from 'uuid'

const HomePage = ({ URL }) => {

    const navigate = useNavigate();
    const [providersArray, setProvidersArray] = useState(null);
    const [groupsArray, setGroupsArray] = useState(null);
    const [classesArray, setClassesArray] = useState(null);
    const [informationsArray, setInformationsArray] = useState(null);

    useEffect(() => {
        axios.get(`${URL}/providers`).then(res => {
            setProvidersArray(res.data)
        })
        axios.get(`${URL}/groups`).then(res => {
            setGroupsArray(res.data)
        })
        axios.get(`${URL}/classes`).then(res => {
            setClassesArray(res.data)
        })
        axios.get(`${URL}/information`).then(res => {
            setInformationsArray(res.data)
        })
    }, {})

    return (
        <div className='home-page'>
            <div>
                <img className='home-page__profile-picture' src={profilePicture} alt='User Profile Picture' />
                <img onClick={() => navigate('/welcome')} src={logo} alt='Misely Logo' />
            </div>
            <p className='home-page__address'>25 Navarre Rd, Toronto, ON</p>
            <div className='home-page__services'>
                <div className='home-page__service'>
                    <img src={housework} />
                    <h2 className='home-page__service-title'>Housework</h2>
                </div>
                <div className='home-page__service'>
                    <img src={doulas} />
                    <h2 className='home-page__service-title'>Doulas</h2>
                </div>
                <div className='home-page__service'>
                    <img src={massage} />
                    <h2 className='home-page__service-title'>Massage</h2>
                </div>
                <div className='home-page__service'>
                    <img src={lactation} />
                    <h2 className='home-page__service-title'>Lactation</h2>
                </div>
                <div className='home-page__service'>
                    <img src={mentalHealth} />
                    <h2 className='home-page__service-title'>Mental<br />Health</h2>
                </div>
            </div>
            <h2 className='home-page__section-title'>Top Providers Near You</h2>
            <div className='home-page__providers'>
                {providersArray ?
                    providersArray.filter(provider => { return provider.homeImage }).map((provider) => {
                        return (
                            <div key={provider.id} className='home-page__provider-wrapper'>
                                <img className='home-page__provider-image' src={`${URL}/${provider.homeImage}`} alt='provider photo' />
                                <div className='home-page__provider-information'>
                                    <h2>Laura Smith, RMT</h2>
                                    <p>5.8km</p>
                                </div>
                                <div className='home-page__provider-rating'>
                                    <img src={star} />
                                    <h2>{provider.rating} ({provider.ratingPool})</h2>
                                </div>
                                <div className='home-page__provider-services'>
                                    {provider.services.map(service => {
                                        return (
                                            <div className='home-page__provider-service'>
                                                <h2>{service}</h2>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        )
                    })
                    : <h2>Loading...</h2>}
            </div>
            <h2 className='home-page__section-title'>Popular Groups</h2>
            <div className='home-page__groups'>
                {groupsArray ?
                    groupsArray.map((group) => {
                        return (
                            <div key={group.id} className='home-page__group'>
                                <img src={`${URL}/${group.image}`} />
                                <h2>{group.name}</h2>
                            </div>
                        )
                    })
                    : <h2>Loading...</h2>}
            </div>
            <h2 className='home-page__section-title'>Join Classes</h2>
            <div className='home-page__classes'>
                {classesArray ? 
                    classesArray.map((classes) => {
                        return (
                            <div key={classes.id} className='home-page__class'>
                                <img src={`${URL}/${classes.image}`} />
                                <h2>{classes.name}</h2>
                            </div>
                        )
                })
                : <h2>Loading...</h2>}
            </div>
            <div className='home-page__information'>
                <h2 className='home-page__section-title'>Useful Information</h2>
                <h2 className='home-page__information-view-more'>View more</h2>
            </div>
                {informationsArray ? informationsArray.map(information => {
                    return (
                        <div className='home-page__information-container'>
                            <div className='home-page__information-texts'>
                                <h2>{information.category}</h2>
                                <h3>{information.title}</h3>
                            </div>
                            <div>
                                <img src={`${URL}/${information.image}`} />
                            </div>
                        </div>
                    )
                })
                    : <h2>Loading...</h2>}
            <div className='home-page__footer-navigation'>
                <div className='home-page__footer-tab'><img src={homeTab} /></div>
                <div className='home-page__footer-tab'><img src={providersTab} /></div>
                <div className='home-page__footer-tab'><img src={bookingsTab} /></div>
                <div className='home-page__footer-tab--special'><img src={messagesTab} /></div>
                <div className='home-page__footer-tab'><img src={groupsTab} /></div>
            </div>
        </div>
    )

}

export default HomePage;