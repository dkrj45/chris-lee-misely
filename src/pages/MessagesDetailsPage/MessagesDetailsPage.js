import './MessagesDetailsPage.scss'
import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back-arrow.png';
import plus from '../../assets/icons/messages-plus.png'
import mic from '../../assets/icons/messages-mic.png'
import laura from '../../assets/icons/message-laura-smith.png'
import me from '../../assets/icons/profile-picture-home.png'

const MessagesDetailsPage = () => {

    const navigate = useNavigate();

    return (
        <div className='messages-details-page'>
            <div className='messages-details-page__header'>
                <img onClick={() => navigate('/messages')} src={back} />
                <h1 className='messages-details-page__title'>Laura Smith, RMT</h1>
            </div>
            <div className='messages-details-page__conversation'>
                <img src={laura} />
                <div>
                    <h3>Thank you for booking with me. What time do you want me to come to your house on January 3?</h3>
                </div>
            </div>
            <div className='messages-details-page__conversation'>
                <div>
                    <h3>Thanks for confimring Laura! I think 3 PM would work </h3>
                </div>
                <img src={me} />
            </div>
            <div className='messages-details-page__conversation'>
                <img src={laura} />
                <div>
                    <h3>That’s perfect. I will see you at 3 then. </h3>
                </div>
            </div>
            <div className='messages-details-page__footer'>
                <img src={plus} />
                <form><input name="text" type="text" placeholder='Write a message...'></input></form>
                <img src={mic} />
            </div>
        </div>
    )
}
export default MessagesDetailsPage;