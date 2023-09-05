import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    name: 'Advanced-Ticketing-System', image: '/degmor.mp4', description: "A user with the Role assigner can create a ticket & create new accounts. When creating a ticket the user can upload a before image and a pdf of the work order with other required fields. Next the user can assign this ticket to a fieldtech. The fieldtech will receive an email of the new ticket. The field tech can acces google maps  through adresss link ,  upload before & after images, leave comments and change the status of the ticket. Once completed the assigner will receive an email he now can create his proposal. After the  form fields have been entered a pdf will be generated that contains the before and after images from the field tech auto sales tax calculation and population of all necessary information from the ticket. This pdf can be downloaded . Now the user can upload a final purchase order pdf and close the ticket. The user can go to there closed ticket and view all uploaded documents and images. :Vercel , Next.js , Bootstrap,Puppeteer, Hygrpah  : Contact me to Request a demo",
    webpagelink: "https://masterytft.herokuapp.com/",
    githublink: "https://github.com/connorbottone/Tft.git",
},{ name: 'Custom Feature', image: '/flipprev.mp4', description: "This was a cuctom feture I built that acounts for the direction inwich the mouse is entering and leaving from. By adding a grid overlay I was able to achive this . You can try a portion of this out for youreslf back at the homepage. " },
    {
        name: 'TFT-Mastery', image: '/tft.webm', description: "e.",
        webpagelink: "https://masterytft.herokuapp.com/",
        githublink: "https://github.com/connorbottone/Tft.git",
    },
    { name: 'TETROMANIA', image: '/tetris.webm', description:  "I have developed an application using React that seamlessly integrates MongoDB Atlas and Apollo GraphQL. This web application was designed to give users a competitive edge while playing TFT. The user has the ability to seaarch for a legend by name and then be displyed with the best 3 items to craft for that legend. Users can also add legends to there favorite list that will be stored in the profile tabe after signup/login. The user also has the ability to see all legends grouped by there trait.The user can then selct there intended trait to see all legends our search for a trait on the trait page.ec ullamcorper mattis, pulvinar dapibus leo.", webpagelink: "https://localtetris.herokuapp.com/",
    githublink: "https://github.com/connorbottone/Tetris.git", },
    { name: 'City-Weather-Tracker', image: '/weather.webm', description: "This webpage is designed to find the weather in user inputed city name.Upon search of desiered city the user will be presented withThe date,An icon representation of weather conditions,The temperature,The humidity,And the wind speed.All of this data will be displayed for the present day and for the following 5 days to come.All past searches are sotred and listed under the search bar.The user can click on one of there past searched options to be presented with that weather info agian. All weather icons are animated upon hover.", webpagelink: "https://connorbottone.github.io/City-Weather-Tracker/",
    githublink: "https://github.com/connorbottone/City-Weather-Tracker.git", },
    { name: 'Study-Helper', image: '/StudyHelper.webm', description: " I have developed an application using React that seamlessly integrates MongoDB Atlas and Apollo GraphQL. This applicaiton was designed to help sutdents study aswell as give teachers a fun way to engae with ther students. This application uses and apollo server aswell as mongosse atlas integration with heroku to create a full stack application. A user has the ability to browse pre-made quizes from grades 1-3. The user must be loged in to use any of this content. This is achived by assigned a token to each user apon login. The user can also create thier own quizes and save them to the database. The user can then search for there newly created quiz by title to begin taking th quiz. This feature was added for teachers to be able to create cutom quizes for there classroom. ", webpagelink: "https://safe-ridge-06648.herokuapp.com/",
    githublink: "https://github.com/connorbottone/StudyHelper.git", },
    
];

const ProductCardPage = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleHover = (index) => {
        setHoveredProduct(index);
    };

    return (
        <div className="container mt-5">
          <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
            <div className="row g-0">
              <div className="col-md-8">
             <h2 style={{color:'white',fontFamily: 'Roboto Mono, monospace', textAlign:'center'}}> {hoveredProduct !== null ? products[hoveredProduct].name : products[0].name }</h2>
                <video
                    autoPlay
                    loop
                 
                    
                    style={{ width: '100%', height: '79%',objectFit: 'fill' , marginTop:'10px' }}

                  src={hoveredProduct !== null ? products[hoveredProduct].image : products[0].image}
                  alt={products[0].name}
                  className="img-fluid rounded-start"
                
                />
              </div>
              <div className="col-md-4 d-flex flex-column">
                <div className="card-body">
                 
                  <ul className="list-group" style={{ width: '100%' }}>
                    {products.map((product, index) => (
                      <li
                        key={index}
                        className={`list-group-item list-group-item-action ${
                          hoveredProduct === index ? 'active' : ''
                        }`}
                        onClick={() => handleHover(index)}
                        
                        style={{ width: '100%', cursor: 'pointer' ,fontFamily: 'Roboto Mono, monospace', fontSize: '20px', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                  <div className="card mt-4 p-4 border">
                    <div className="card-body text-center">
                     <p style={{fontSize:"12px"}}>{hoveredProduct !== null ? products[hoveredProduct].description : products[0].description }</p> 
                    </div>
                    {hoveredProduct !== null && hoveredProduct !== 0 &&  hoveredProduct !== 1&& (
                      <div className="text-center mt-2">
                        <a href={products[hoveredProduct].webpagelink} target="_blank" rel="noopener noreferrer">
                          Webpage Link
                        </a>
                        <br />
                        <a href={products[hoveredProduct].githublink} target="_blank" rel="noopener noreferrer">
                          GitHub Link
                        </a>
                        <br />
                       
                        
                        
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductCardPage;
