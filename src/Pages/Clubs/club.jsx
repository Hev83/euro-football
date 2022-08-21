import ClubsHeader from '../../Images/lion.jpg';
import {Players} from '../../Components';

const Clubs = () => {
    return (
        <>
          {/* Header */} 
        <div className='AboutHeader'>
            <div>
                <img src={ClubsHeader} className="img-fluid" alt='' />
            </div>
          <div className='Overlay'></div>
        </div>

        <Players />
        </>
    );
};

export default Clubs;