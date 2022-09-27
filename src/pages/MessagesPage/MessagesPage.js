import './MessagesPage.scss';
import { useNavigate } from 'react-router-dom'
import homeTab from '../../assets/icons/home-tab.png'
import providersTab from '../../assets/icons/providers-tab.png'
import bookingsTab from '../../assets/icons/bookings-tab.png'
import messagesTab from '../../assets/icons/messages-tab-featured.png'
import groupsTab from '../../assets/icons/groups-tab.png'
import laura from '../../assets/images/message-laura.png'
import liz from '../../assets/images/message-liz.png'
import beth from '../../assets/images/message-beth.png'
import rev from '../../assets/images/message-rev.png'

function MessagesPage() {

    const navigate = useNavigate();

    const inDevelopment = () => {
        return alert("This feature is currently being developed")
    }

    return (
        <div className='messages-page'>
            <div className='messages-page__header'>
                <h1 className='messages-page__title'>Messages</h1>
            </div>
            <div onClick={()=>navigate('/messages/details')} className='messages-page__container'>
                <img src={laura} />
                <div className='messages-page__right'>
                    <h2>Laura Smith, RMT</h2>
                    <h3>That's perfect. I will see you at 3 then.</h3>
                </div>
            </div>
            <div onClick={()=>navigate('/messages/details')} className='messages-page__container'>
                <img src={liz} />
                <div className='messages-page__right'>
                    <h2>Liz Williams</h2>
                    <h3>I know... It's stressful time</h3>
                </div>
            </div>
            <div onClick={()=>navigate('/messages/details')} className='messages-page__container'>
                <img src={beth} />
                <div className='messages-page__right'>
                    <h2>Beth Stewart</h2>
                    <h3>I'm looking for tips around formulas</h3>
                </div>
            </div>
            <div onClick={()=>navigate('/messages/details')} className='messages-page__container'>
                <img src={rev} />
                <div className='messages-page__right'>
                    <h2>Rev Shawn</h2>
                    <h3>Wanted to ask if you are available this Friday for a prenatal class with me</h3>
                </div>
            </div>
            <div className='bookings-page__footer-navigation'>
                <div onClick={() => navigate('/home')} className='bookings-page__footer-tab'><img src={homeTab} /></div>
                <div onClick={() => navigate('/providers')} className='bookings-page__footer-tab'><img src={providersTab} /></div>
                <div onClick={() => navigate('/bookings')} className='bookings-page__footer-tab'><img src={bookingsTab} /></div>
                <div className='bookings-page__footer-tab--special'><img src={messagesTab} /></div>
                <div onClick={inDevelopment} className='bookings-page__footer-tab'><img src={groupsTab} /></div>
            </div>
        </div>
    );

  }
  
  export default MessagesPage;