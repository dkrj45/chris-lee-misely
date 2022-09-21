import './AvailabilityPage.scss';
import back from '../../assets/icons/back-arrow.png';
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { useState } from 'react';


function AvailabilityPage() {

    const navigate = useNavigate();

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const toRequest = () => {
        navigate('/request')
    }

    return (
        <div className='availability-page'>
            <div className='availability-page__header'>
                <img onClick={() => navigate('/providers/:id')} src={back} />
                <h1 className='availability-page__title'>Availiability</h1>
            </div>
            <DateRange
                className='availability-page__date-range-picker'
                onChange={item => setDates([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={dates}
                direction="vertical"
            />
            <div className='availability-page__footer'>
                <div className='availability-page__footer-not-button'>
                    <h2>From $35 / hour</h2>
                    <p>Minimum 4 hours per day</p>
                </div>
                <button onClick={()=>toRequest()} className='availability-page__footer-button'>Select dates</button>
            </div>
        </div>
    );

}

export default AvailabilityPage;