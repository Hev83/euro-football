import "./home.css";
import HeaderImg from '../../Images/header.jpg';
import Details from '../../Images/details.jpg';
import SecondHeaderImg from '../../Images/england.jpg';
import custom1 from '../../Images/squad.jpg';

const Home = () => {
    return(
        <>
          {/* Header */}
         <div className="header">
            <div>
                <div className="img">
                    <img src={HeaderImg} alt="" />
                </div>
          <div className="HeaderImgOverlay"></div>
         </div>

         <div className="HeaderContent">
            <h6>
                 It's coming <span>Home</span> 
            </h6>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis, cumque facilis quo asperiores, fuga consectetur 
                beatae ab optio aspernatur nisi quis laudantium inventore, 
                veniam id placeat? Impedit fuga quis sed.
            </p>
            </div>  
         </div>

                    {/* Details Section Start */}
         <div className="details_home container">
           <div className="row">
              <div className="col-sm-6">
                  <img src={Details} className="img-fluid" alt="" />
                </div>
          <div className="col-sm-6">
              <h6>It's Coming Home....</h6>
                <h5>
                    UEFA <br /> Women's Euro <span>Lionesses</span>
                </h5>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Tempore, dignissimos eligendi fugiat laborum laboriosam quasi, 
                    in fuga provident consequatur inventore odio cupiditate unde similique 
                    reiciendis alias, suscipit pariatur modi? Enim. <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita
                    facere commodi? Illum aliquid doloribus corrupti qui aut laborum hic et illo, 
                    consequatur quisquam modi maiores adipisci minus ipsum sint!
                </p>
            </div>
            </div>
            </div>

                           {/* Details Second */}
          <div className="details_home_second">
            <div className="container">
              <div className="row">
               <div className="col-sm-4">
                 <div className="box">
                    <h6>Euro's 2022 Winners</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ad velit quod debitis adipisci vel. Ipsam facilis libero tempora,
                        non, error odit minus voluptas molestiae excepturi explicabo 
                        voluptatibus sed fuga quae!
                      </p>
                 </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="box">
                <h6>Euro's 2022 Winners</h6>
                   <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Ad velit quod debitis adipisci vel. Ipsam facilis libero tempora,
                      non, error odit minus voluptas molestiae excepturi explicabo 
                      voluptatibus sed fuga quae!
                  </p>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="box">
                <h6>Euro's 2022 Winners</h6>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Ad velit quod debitis adipisci vel. Ipsam facilis libero tempora,
                       non, error odit minus voluptas molestiae excepturi explicabo 
                       voluptatibus sed fuga quae!
                  </p>
                </div>
 
               {/* Details Section End */} 
                  {/* Second Header */}
           <div className="second_header">
          </div>
             <div className="img">
                <img src={SecondHeaderImg} alt="" />
            </div> 
          <div className="SecondHeaderOve">
         </div>
         <div className="SecondHeaderContent">
           <h6>Euro's 2022 Winners...</h6>        
          </div>
    
               {/* Custom section start */}

         <div className="custom_section container">
          <div className="row">
               <div className="col-sm-6">
                <div className="box">

                {/* */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={custom1} className="img-flud" alt="" />
                    </div>
                <div className="offset-sm-2 col-sm-5">
                    <h6>Improve Women's Football</h6>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Repellendus similique, expedita natus in ut iusto placeat 
                        sapiente odit impedit saepe aperiam, distinctio, enim ipsum? 
                        Sed minus aliquam explicabo dignissimos est.
                    </p>
                </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={custom1} className="img-flud" alt="" />
                    </div>
                <div className="offset-sm-2 col-sm-5">
                    <h6>Improve Women's Football</h6>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Repellendus similique, expedita natus in ut iusto placeat 
                        sapiente odit impedit saepe aperiam, distinctio, enim ipsum? 
                        Sed minus aliquam explicabo dignissimos est.
                    </p>
                </div>
                </div>
            </div>
          </div>
         </div>
       </div>
        </div>
        </div>
        </div>
        </div>
   </>
 );
};

export default Home; 