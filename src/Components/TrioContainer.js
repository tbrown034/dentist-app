import teeth from "./Images/dentistteeth.jpeg";
import smile from "./Images/smile3.webp";
import brush from "./Images/toothbrush.jpeg";




const trioServices = () => {
  return (
    <>
     
      <div id="trioContainer">
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${brush})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)"
          }}
        >
          <div id="serviceContainer">
            <h1 id="topServiceText">General Dentristry </h1>
            <h3 id="serviceLinkHoldr">
              <a href="/Location">Check-Ups</a>
              <a href="/Location">Fillings</a>
              <a href="/Location">Emergency</a>
              <a href="/Location">Root Canals</a>
              <a href="/Location">Emergency</a>
              <a href="/Location">Childrens' Dentristry</a>
            </h3>
          </div>
        </div>
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${smile})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: 750,
          }}
        >
          <div id="serviceContainer">
            <h1 id="topServiceText">Cosmetic Dentristry </h1>
            <h3 id="serviceLinkHoldr">
              <li>
                <ul>
                  <a href="/Location">Invislaign</a>
                  <a href="/Location">Veeners </a>
                  <a href="/Location">Teeth Whitening</a>
                  <a href="/Location">Bonding</a>
                  <a href="/Location">Emergency</a>
                </ul>
              </li>
            </h3>
          </div>
        </div>
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${teeth})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: 750,
          }}
        >
          <div id="serviceContainer">
            <h1 id="topServiceText">Surgical Dentristry</h1>
            <h3 id="serviceLinkHoldr">
              <a href="/Location">Extractions</a>
              <a href="/Location">Implants</a>
              <a href="/Location">Bridges</a>
              <a href="/Location">Dentures</a>
            </h3>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default trioServices;
