import './ProvidersPage.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import homeTab from '../../assets/icons/home-tab.png'
import providersTab from '../../assets/icons/providers-tab-featured.png'
import bookingsTab from '../../assets/icons/bookings-tab.png'
import messagesTab from '../../assets/icons/messages-tab.png'
import groupsTab from '../../assets/icons/groups-tab.png'
import star from '../../assets/icons/star.png'
import filter from '../../assets/icons/filter.png'
import axios from 'axios';

function ProvidersPage({ URL }) {

    let navigate = useNavigate();

    const inDevelopment = () => {
        return alert("This feature is currently being developed")
    }

    const [providers, setProviders] = useState(null)

    useEffect(() => {
        axios.get(`${URL}/providers`).then(res => {
            setProviders(res.data)
        })
    }, [])

    let services = (array) => {
        let dummy = []
        for (let i = 0; i < array.length; i++) {
            dummy.push(<div className='providers-page__provider-services'><h2>{array[i]}</h2></div>)
        }
        return dummy
    }

    return (
        <div>
            <div className='providers-page__header'>
                <h1 className='providers-page__header-title'>25 Navarre Rd, Toronto, ON</h1>
                <img className='providers-page__header-filter' src={filter} />
            </div>
            <div className='providers-page'>
                <input className='providers-page__search' type='text' name='search-bar' placeholder='Search provider' ></input>
                <div>
                    {providers
                        ? providers.map(provider => {
                            return (
                                <div onClick={()=>navigate('/providers/64450fa1-a338-414e-a71e-6bc8cb984a2e')} className='providers-page__provider'>
                                    <img src={`${URL}/${provider.image}`} />
                                    <div className='providers-page__provider-info-container'>
                                        <div className='providers-page__provider-info'>
                                            <div className='providers-page__provider-left'>
                                                <h2 className='providers-page__provider-name'>{provider.name}</h2>
                                                <div className='providers-page__provider-rating'>
                                                    <img src={star} />
                                                    <h3>{provider.rating} <span>({provider.ratingPool})</span></h3>
                                                </div>
                                            </div>
                                            <div className='providers-page__provider-right'>
                                                <h2>{provider.distance}</h2>
                                                <h2>{provider.location}</h2>
                                            </div>
                                        </div>
                                        <div className='providers-page__provider-services-container'>
                                            {services(provider.services)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <h1>Loading...</h1>}
                </div>
            </div>
            <div className='providers-page__footer-navigation'>
                <div onClick={() => navigate('/home')} className='providers-page__footer-tab'><img src={homeTab} /></div>
                <div className='providers-page__footer-tab'><img src={providersTab} /></div>
                <div onClick={() => navigate('/bookings')} className='providers-page__footer-tab'><img src={bookingsTab} /></div>
                <div onClick={() => navigate('/messages')} className='providers-page__footer-tab--special'><img src={messagesTab} /></div>
                <div onClick={inDevelopment} className='providers-page__footer-tab'><img src={groupsTab} /></div>
            </div>
        </div>
    );

}

export default ProvidersPage;