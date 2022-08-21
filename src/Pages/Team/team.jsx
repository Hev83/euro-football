import TeamHeader from '../../Images/winners.jpg';

const Teams = () => {
    return (
        <>
          {/* Header */}
          <div className='AboutHeader'>
            <div>
                <img src={TeamHeader} className="img-fluid" alt='' />
            </div>
            <div className='Overlay'></div>
          </div>

           
        </>
    );
};

export default Teams;