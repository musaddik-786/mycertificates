import React from 'react';
import '../assets/styles1.css';
import bgImage from '../assets/bg.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.png';

const Home = () => {
  return (
    <>
      <div id="background">
        <img src={bgImage} alt="Background" />
      </div>
      <div id="wrapper">
        <div className="container">
          <h1>My Gallery</h1>
          <div className="gallery">
            <figure className="card">
              <img src={image1} alt="image1" />
              <figcaption>image1</figcaption>
            </figure>
            <figure className="card">
              <img src={image2} alt="image2" />
              <figcaption>image2</figcaption>
            </figure>
            <figure className="card">
              <img src={image3} alt="image3" />
              <figcaption>image3</figcaption>
            </figure>
            <figure className="card">
              <img src={image4} alt="image4" />
              <figcaption>image4</figcaption>
            </figure>
            <figure className="card">
              <img src={image5} alt="image5" />
              <figcaption>image5</figcaption>
            </figure>
            <figure className="card">
              <img src={image6} alt="image6" />
              <figcaption>image6</figcaption>
            </figure>
            <figure className="card">
              <img src={image7} alt="image7" />
              <figcaption>image7</figcaption>
            </figure>
            <figure className="card">
              <img src={image8} alt="image8" />
              <figcaption>image8</figcaption>
            </figure>
            <figure className="card">
              <img src={image9} alt="image9" />
              <figcaption>image9</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
