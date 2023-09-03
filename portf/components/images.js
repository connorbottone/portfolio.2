import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
    {
        name: 'TFT Mastery', image: '/tft.webm', description: "I have developed an application using React that seamlessly integrates MongoDB Atlas and Apollo GraphQL. This web application was designed to give users a competitive edge while playing TFT. The user has the ability to seaarch for a legend by name and then be displyed with the best 3 items to craft for that legend. Users can also add legends to there favorite list that will be stored in the profile tabe after signup/login. The user also has the ability to see all legends grouped by there trait.The user can then selct there intended trait to see all legends our search for a trait on the trait page.",
        webpagelink: "https://masterytft.herokuapp.com/",
        githublink: "https://github.com/connorbottone/Tft.git",
    },
    { name: 'TETROMANIA', image: '/tetris.webm', description:  "I have developed an application using React that seamlessly integrates MongoDB Atlas and Apollo GraphQL. This web application was designed to give users a competitive edge while playing TFT. The user has the ability to seaarch for a legend by name and then be displyed with the best 3 items to craft for that legend. Users can also add legends to there favorite list that will be stored in the profile tabe after signup/login. The user also has the ability to see all legends grouped by there trait.The user can then selct there intended trait to see all legends our search for a trait on the trait page.ec ullamcorper mattis, pulvinar dapibus leo.", webpagelink: "https://localtetris.herokuapp.com/",
    githublink: "https://github.com/connorbottone/Tetris.git", },
    { name: 'City weather tracker', image: '/weather.webm', description: "This webpage is designed to find the weather in user inputed city name.Upon search of desiered city the user will be presented withThe date,An icon representation of weather conditions,The temperature,The humidity,And the wind speed.All of this data will be displayed for the present day and for the following 5 days to come.All past searches are sotred and listed under the search bar.The user can click on one of there past searched options to be presented with that weather info agian. All weather icons are animated upon hover.", webpagelink: "https://connorbottone.github.io/City-Weather-Tracker/",
    githublink: "https://github.com/connorbottone/City-Weather-Tracker.git", },
    { name: 'Study Helper', image: '/StudyHelper.webm', description: " I have developed an application using React that seamlessly integrates MongoDB Atlas and Apollo GraphQL. This applicaiton was designed to help sutdents study aswell as give teachers a fun way to engae with ther students. This application uses and apollo server aswell as mongosse atlas integration with heroku to create a full stack application. A user has the ability to browse pre-made quizes from grades 1-3. The user must be loged in to use any of this content. This is achived by assigned a token to each user apon login. The user can also create thier own quizes and save them to the database. The user can then search for there newly created quiz by title to begin taking th quiz. This feature was added for teachers to be able to create cutom quizes for there classroom. ", webpagelink: "https://safe-ridge-06648.herokuapp.com/",
    githublink: "https://github.com/connorbottone/StudyHelper.git", },
    { name: 'Product 5', image: '/bck.gif', description: "This is a description lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
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
             <h2 style={{color:'white',fontFamily: 'Roboto Mono, monospace', textAlign:'center'}}> {hoveredProduct !== null ? products[hoveredProduct].name : ''}</h2>
                <video
                    autoPlay
                    loop
                 
                    
                    style={{ width: '100%', height: '80%',objectFit: 'fill'  , marginTop: '10%'}}

                  src={hoveredProduct !== null ? products[hoveredProduct].image : ''}
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
                      {hoveredProduct !== null ? products[hoveredProduct].description : ''}
                    </div>
                    {hoveredProduct !== null && (
                      <div className="text-center mt-2">
                        <a href={products[hoveredProduct].webpagelink} target="_blank" rel="noopener noreferrer">
                          Webpage Link
                        </a>
                        <br />
                        <a href={products[hoveredProduct].githublink} target="_blank" rel="noopener noreferrer">
                          GitHub Link
                        </a>
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
