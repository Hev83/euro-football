import Lion from '../../Images/lion.jpg';
import AboutEsess from '../../Images/esess.jpg';
import "./about.css";

const AboutPage = () => {
    return (
        <>
          {/* Header */}
          <div className='lion'>
            <div>
                <img src={Lion} className="img-fluid" alt='' />
            </div>
           <div className='Overlay'></div>
          </div>

          {/* About Main Section Start*/}
          <div className='about_esess container'>
            <div className='row'>
                <div className='col-sm-5'>
                    <img src={AboutEsess} className="img-fluid" alt='' />
                </div>
           <div className='col-sm-5'>
              <h6>About Us</h6>
              <h5>England Lionesses</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Est officiis nesciunt, nam consequatur amet quod. Qui minus 
                in voluptatum autem quibusdam dicta nostrum quaerat, nesciunt 
                corporis, iste fuga pariatur nemo! <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia alias corporis, iure dolorem officiis hic sunt ex 
                sapiente accusantium! Suscipit commodi, quos assumenda perferendis 
                autem voluptates exercitationem! Quas, corporis aliquam!
              </p>
           </div>
            </div>
          </div> 
        </>
    );
};

export default AboutPage;
