import chair from './Images/dentalchair.jpeg'

const Services = () => {
    return (
      <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${chair})`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 550,
        }}
      >
        <div
          id="mask"
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">Routine Cleanings, Cosmetic Procueres and More. </h1>
              <h3 id="bottomHeroText">
              Our goal is to have your teeth functioning normally in as short a time as possible. We’re committed to providing comprehensive dental care for all our patients. We provide treatments to encourage the best possible dental health and cosmetic treatments to enhance your smile. 

              </h3>
              <br></br>
            </div>

            <div id="buttonContainer">
              <br></br>
              <a
                className="btn btn-outline-light btn-lg"
                href="/Appointment"
                role="button"
              >
                Make an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Services;