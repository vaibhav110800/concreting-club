import React from "react";
import Footer from "./components/footer";
import Menubar from "./components/menubar";

const About = () => {
  return (
    <div>
      <Menubar />
      {/* ------------------- sec1 -------------------- */}
      <div className="abt1">
        <div className="abt1-l">
          <div className="abt1-inner">
            <h1>About Us</h1>
            <h2>In business with Perfection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nulla alias necessitatibus unde tempora tenetur. Aspernatur
              optio quidem id quas est, doloremque sequi, dicta
              consequuntur dolorum adipisci ratione, ullam quos ex.
            </p>
            <button>
              <a href="">Contact Us</a>
            </button>
          </div>
        </div>
        <div className="abt1-r">
          <div className="abt1-r-t"></div>
          <div className="abt1-r-b">
            <h2>Every Kind of paving you need</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nulla alias necessitatibus unde tempora tenetur.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------- sec2 -------------------- */}
      <div className="abt2">
        <div className="abt2-l">
          <img src="./images/6.about-us-page/3.jpg" alt="" />
        </div>
        <div className="abt2-r">
          <div className="abt2-r-inner">
            <h2>In business with Perfection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nulla alias necessitatibus unde tempora tenetur. Aspernatur
              optio quidem id quas est, doloremque sequi, dicta
              consequuntur dolorum adipisci ratione, ullam quos ex.
            </p>
            <button>
              <a href="">Contact Us</a>
            </button>
          </div>

        </div>
      </div>

      {/* ------------------- sec3 -------------------- */}
      <div className="abt3">
        <h1>About the company</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus laborum autem necessitatibus molestias, quasi itaque commodi quas suscipit sit hic exercitationem asperiores! Autem amet libero officiis harum, aliquam cupiditate?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea, nisi earum non voluptas maiores amet harum placeat itaque. Deserunt quisquam officia illum minus repudiandae voluptatum magnam autem culpa recusandae!</p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
