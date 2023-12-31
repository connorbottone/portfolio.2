import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flip from '@/components/smallflip';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  const dynamicStyles = {
    backgroundColor: isLightMode ? '#fff' : '#000',
    color: isLightMode ? '#000' : '#ffffff',
  };

  const togglerStyles = {
    position: "absolute",
    bottom: 0,
    left: "-3%",
    transform: "translateX(-50%) rotate(-90deg)",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
  };
  const toggler = {
    color: isLightMode ? '#000' : '#ffffff',
  };

  return (
    <>
      <section className="vh-100" style={dynamicStyles}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-12 mb-5">
              <div
                style={{
                  backgroundImage: 'url("/bcks.gif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "solid white 1px",
                  height: "90vh",
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
                       
                        <a className="nav-link text-white" href="/projects">
                          Projects
                        </a>
                        <a className="nav-link text-white" href="/contact">
                          Contact
                        </a>
                        <a className="nav-link text-white" href="/">
                          Home
                        </a>
                      </nav>
                    </div> <div style={{color:"white"}}className="position-absolute bottom-0 end-0 ">
                      <Flip/>
                    </div>
                    <div
  style={{
    color: "white",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }}
>
  <a href='https://profile.indeed.com/p/connorb-movm7b2'>Resume</a> ↗️ <br />
 
  <br />
 <a href=' https://www.linkedin.com/in/connor-bottone/' >
   Linked In   </ a>↗️ <br /> <br />

   <a href='https://github.com/connorbottone?tab=repositories'>Github</a> ↗️ <br />
 
 
 
</div>

                  </div>
                 
                </div>
                <div style={{...togglerStyles, bottom:"7%"}}>
                  <input
                    type="checkbox"
                    id="lightModeToggle"
                    checked={isLightMode}
                    onChange={toggleLightMode}
                  />
                  <label style={toggler}className=" ms-2" htmlFor="lightModeToggle">
                    Light
                  </label>
                </div>
                <div style={{ ...togglerStyles, bottom: "19%" }}>
                  <input
                    type="checkbox"
                    id="darkModeToggle"
                    checked={!isLightMode}
                    onChange={toggleLightMode}
                  />
                  <label style={toggler} className=" ms-2" htmlFor="darkModeToggle">
                    Dark
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
