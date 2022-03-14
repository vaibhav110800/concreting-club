import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menubar from "./components/menubar";
import Footer from "./components/footer";

function Home() {
  return (
    <div className="App">
      {/* -------------- navbar ------------ */}
      <Menubar />

      {/* ----------------------- sec1 --------------------- */}
      <div className="sec1">
        <div className="sec1-top">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000">
                <img
                  src="./images/1.banner/1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img
                  src="./images/1.banner/2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img
                  src="./images/1.banner/3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="sec1-bottom">
          <div className="sec1-left">
            <h1>Concreting Club</h1>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio perferendis non assumenda nobis hic facilis eaque
              sapiente impedit, nam blanditiis! Ut veritatis dignissimos
              corrupti accusamus aut, harum perspiciatis cumque fugit!
            </p>
          </div>
          <div className="sec1-right">
            <div className="sec1-1">
              <img src="./images/1.banner/1.jpg" alt="" />
            </div>
            <div className="sec1-2">
              <img src="./images/1.banner/2.jpg" alt="" />
            </div>
            <div className="sec1-3">
              <img src="./images/1.banner/3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- sec 2 --------------------- */}

      <div class="dom-sec1">
        <div class="dom-sec1-box-1"></div>
        <div class="dom-sec1-box-head">Best Products</div>

        <div class="dom-sec1-box-main">
          <div class="dom-sec1-box2">
            <div class="dom-sec1-box2-inner">
              <div class="dom-sec1-box2-inner1"></div>
              <div class="dom-sec1-box2-inner2">
                <div class="dom-sec1-box2-inner2i">
                  BEST DEALERS <br />
                  IN PAVING
                </div>
              </div>
              <div class="dom-sec1-box2-inner3"></div>
            </div>
          </div>
          <div class="dom-sec1-box3"></div>
          <div class="dom-sec1-box4">
            <div class="dom-sec1-box4-top">QUALITY WORK</div>
            <div class="dom-sec1-box4-bottom">
              <h3 href="">LOREM IPSUM</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="dom-sec2">
        <div class="dom-sec2-head">
          <div class="dom-sec2-head-inner">ELEGANT DESIGN</div>
        </div>
        <div class="dom-sec2-para">
          <div class="dom-sec2-para-inner">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            enim, obcaecati laudantium ad hic illo quam adipisci. Impedit,
            perferendis. Eos illum facilis odio at quis ipsum velit, minus
            reprehenderit praesentium.
          </div>
        </div>
        <button>
          <a href="">READ MORE</a>
        </button>
      </div>

      {/* ----------------------- sec 3 --------------------- */}

      <div class="dom-sec6">
        <h1>Our Services</h1>

        <div class="dom-sec6-box1">
          <div class="dom-sec6-box1-left">
            <div class="dom-sec6-box1-left-inner">
              <div class="dom-sec6-box1-left-h">Concrete Paving</div>
              <div class="dom-sec6-box1-left-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque
                alias dolorem ex delectus earum cupiditate quasi aliquam
                reprehenderit nisi aperiam provident incidunt ab!
              </div>
            </div>
          </div>
          <div class="dom-sec6-box1-right"></div>
        </div>

        <div class="dom-sec6-box2">
          <div class="dom-sec6-box2-left"></div>
          <div class="dom-sec6-box2-right">
            <div class="dom-sec6-box2-right-inner">
              <div class="dom-sec6-box2-right-h">Brick Paving</div>
              <div class="dom-sec6-box2-right-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque
                alias dolorem ex delectus earum cupiditate quasi aliquam
                reprehenderit nisi aperiam provident incidunt ab!
              </div>
            </div>
          </div>
        </div>

        <div class="dom-sec6-box1">
          <div class="dom-sec6-box1-left">
            <div class="dom-sec6-box1-left-inner">
              <div class="dom-sec6-box1-left-h">Aggregate Paving</div>
              <div class="dom-sec6-box1-left-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque
                alias dolorem ex delectus earum cupiditate quasi aliquam
                reprehenderit nisi aperiam provident incidunt ab!
              </div>
            </div>
          </div>
          <div class="dom-sec6-box1-right"></div>
        </div>

        <div class="dom-sec6-box2">
          <div class="dom-sec6-box2-left"></div>
          <div class="dom-sec6-box2-right">
            <div class="dom-sec6-box2-right-inner">
              <div class="dom-sec6-box2-right-h">Colored Concrete Paving</div>
              <div class="dom-sec6-box2-right-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque
                alias dolorem ex delectus earum cupiditate quasi aliquam
                reprehenderit nisi aperiam provident incidunt ab!
              </div>
            </div>
          </div>
        </div>

        <button>
          <a href="">READ MORE</a>
        </button>
      </div>

      {/* ----------------------- sec 5 --------------------- */}
      <div className="sec5">
        <h2>TESTIMONIALS</h2>
        <h1>See what our clients say about us!!</h1>
        <div className="wrapper">
          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>
              Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
              elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
              repellendus repudiandae deleniti ideas fuga molestiae, alias.
            </p>
            <div className="content">
              <div className="info">
                <div className="name">Vaibhav</div>
                <div className="job">Web Developer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/5.testimonials/1.jfif" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>
              Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
              elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
              repellendus repudiandae deleniti ideas fuga molestiae, alias.
            </p>
            <div className="content">
              <div className="info">
                <div className="name">Kaustubh</div>
                <div className="job">Software Engineer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/5.testimonials/2.jfif" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left  quote"></i>
            <p>
              Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
              elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
              repellendus repudiandae deleniti ideas fuga molestiae, alias.
            </p>
            <div className="content">
              <div className="info">
                <div className="name">Ankush</div>
                <div className="job">Freelancer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/5.testimonials/3.jfif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- sec 4 --------------------- */}
      <div className="sec4">
        <div className="sec4-l">
          <h1>Our Works</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            asperiores suscipit vel fugit ut! Consequuntur velit hic, vel
            praesentium aut nobis tempore, rerum repellendus tenetur ibero,
            impedit omnis sit expedita!
          </p>
        </div>

        <div className="sec4-r">
          <div className="sec4-box">
            <div className="sec4-box-l">
              <img src="./images/1.banner/1.jpg" alt="" />
              <img src="./images/1.banner/1.jpg" alt="" />
              <img src="./images/1.banner/1.jpg" alt="" />
              <img src="./images/1.banner/1.jpg" alt="" />
            </div>
            <div className="sec4-box-r">
              <h1>Type of Work</h1>
              <div className="sec4-address">
                <i class="fas fa-map-marker-alt"></i>
                <h2>XYZ street, abc town, klj city</h2>
              </div>
            </div>
          </div>
          <div className="sec4-box">
            <div className="sec4-box-l">
              <img src="./images/1.banner/2.jpg" alt="" />
              <img src="./images/1.banner/2.jpg" alt="" />
              <img src="./images/1.banner/2.jpg" alt="" />
              <img src="./images/1.banner/2.jpg" alt="" />
            </div>
            <div className="sec4-box-r">
              <h1>Type of Work</h1>
              <div className="sec4-address">
                <i class="fas fa-map-marker-alt"></i>
                <h2>XYZ street, abc town, klj city</h2>
              </div>
            </div>
          </div>
          <div className="sec4-box">
            <div className="sec4-box-l">
              <img src="./images/1.banner/3.jpg" alt="" />
              <img src="./images/1.banner/3.jpg" alt="" />
              <img src="./images/1.banner/3.jpg" alt="" />
              <img src="./images/1.banner/3.jpg" alt="" />
            </div>
            <div className="sec4-box-r">
              <h1>Type of Work</h1>
              <div className="sec4-address">
                <i class="fas fa-map-marker-alt"></i>
                <h2>XYZ street, abc town, klj city</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec4-button">
        <button>
          <a href="">VIEW ALL</a>
        </button>
      </div>

      {/* ----------------------- footer --------------------- */}
      <Footer />
    </div>
  );
}

export default Home;
