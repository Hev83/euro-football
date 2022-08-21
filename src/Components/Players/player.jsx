import Player_Willson from '../../Images/willson.jpg';
import Player_Kelly from '../../Images/kelly.jpg';
import Player_Hemp from '../../Images/hempo.jpg';
import Player_Walsh from '../../Images/walsh.jpg';
import Player_Greenwood from '../../Images/greenwood.jpg';
import Player_lucy from '../../Images/lucy.jpg';
import './player.css';

const Players = () => {
    return(
        <>
        <div className='container Players'>
          <div className='content'>
            <h6>
              Check Our<span>Lionesses</span>
            </h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Qui excepturi itaque facere cum architecto soluta dolorem
              laudantium, recusandae, officiis quia corporis expedita
              assumenda maxime quidem neque nesciunt vitae
              magnam! Itaque!
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='box'>
              <img src={Player_Willson} className="img-fluid" alt='' />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='box'>
              <img src={Player_Kelly} className="img-fluid" alt='' />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='box'>
              <img src={Player_Hemp} className="img-fluid" alt='' />
            </div>
          </div>
  
          <div className='row'>
            <div className='col-sm-4'>
              <div className='box'>
                <img src={Player_Walsh} className="img-fluid" alt='' />
              </div>
            </div>
  
            <div className='row'>
              <div className='col-sm-4'>
                <div className='box'>
                  <img src={Player_Greenwood} className="img-fluid" alt='' />
                </div>
              </div>
  
              <div className='row'>
                <div className='col-sm-4'>
                  <div className='box'>
                    <img src={Player_lucy} className="img-fluid" alt='' />
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Players;