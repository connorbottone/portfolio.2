import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from '@/components/images';
export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  const dynamicStyles = {
    backgroundColor: isLightMode ? '#fff' : '#000',
    color: isLightMode ? '#000' : '#ffffff',
  };

  const cardStyles = {
    border: "1px solid white",
    borderRadius: "0px 104px 0px 0px",
    padding: "20%",
    backgroundColor: "#ffffff",
    color: "#000",
    marginLeft: ".7%",
    
    
  };

  return (
    <>
      <section className="vh-100" style={dynamicStyles}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-12 mb-5">
              <div
                style={{
                  backgroundImage: 'url("/bbkss.gif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "solid white 1px",
                  minHeight: "90vh",
                  position: "relative",
                }}
                className="card"
              >
                <div className="row g-0">
                  <div className="col-md-8 col-lg-9 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <h3 style={{ fontWeight: "200px", fontSize: "40px" }}>
                        <span className="text-white">Connor Bottone</span>
                      </h3>
                      <h3
                        style={{
                          fontWeight: "200px",
                          fontSize: "17px",
                          marginTop: "-7px",
                          marginLeft: "4px",
                        }}
                        className="fw-light mb-4"
                      >
                        <span className="text-white">
                          Software & Web Developer
                        </span>
                      </h3>
                      <nav className="nav flex-column">
                        <a className="nav-link text-white" href="/">
                          Home
                        </a>
                        <a className="nav-link text-white" href="/contact">
                          Contact
                        </a>
                        <a className="nav-link text-white" href="/resume">
                          About
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <Images/>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
