import './App.css';

function App() {
  return (
    <div className="App">

      {/* -------------- navbar ------------ */}
      <nav className='navv'>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">
          <a href="#">Concreting Club</a>
        </label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      {/* ----------------------- sec1 --------------------- */}
      <div className="sec1">

        <div className="sec1-top">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000">
                <img src="./images/1.banner/1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./images/1.banner/2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="./images/1.banner/3.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
              Distinctio perferendis non assumenda nobis hic
              facilis eaque sapiente impedit, nam blanditiis!
              Ut veritatis dignissimos corrupti accusamus aut,
              harum perspiciatis cumque fugit!
            </p>
          </div>
          <div className="sec1-right">
            <div className="sec1-1"><img src="./images/1.banner/1.jpg" alt="" /></div>
            <div className="sec1-2"><img src="./images/1.banner/2.jpg" alt="" /></div>
            <div className="sec1-3"><img src="./images/1.banner/3.jpg" alt="" /></div>
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
                <div class="dom-sec1-box2-inner2i">BEST DEALERS <br />IN PAVING</div>
              </div>
              <div class="dom-sec1-box2-inner3"></div>
            </div>
          </div>
          <div class="dom-sec1-box3"></div>
          <div class="dom-sec1-box4">
            <div class="dom-sec1-box4-top">QUALITY WORK</div>
            <div class="dom-sec1-box4-bottom"><h3 href="">LOREM IPSUM</h3></div>
          </div>
        </div>
      </div>

      <div class="dom-sec2">
        <div class="dom-sec2-head">
          <div class="dom-sec2-head-inner">ELEGANT DESIGN</div>
        </div>
        <div class="dom-sec2-para">
          <div class="dom-sec2-para-inner">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam enim,
            obcaecati laudantium ad hic illo quam adipisci. Impedit, perferendis. Eos illum facilis odio at quis
            ipsum velit, minus reprehenderit praesentium.</div>
        </div>
        <button><a href="">READ MORE</a></button>
      </div>


      {/* ----------------------- sec 3 --------------------- */}

      <div class="dom-sec6">
        <h1>Our Services</h1>

        <div class="dom-sec6-box1">
          <div class="dom-sec6-box1-left">
            <div class="dom-sec6-box1-left-inner">
              <div class="dom-sec6-box1-left-h">Concrete Paving</div>
              <div class="dom-sec6-box1-left-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque alias dolorem ex delectus earum
                cupiditate quasi aliquam reprehenderit nisi aperiam provident incidunt ab!</div>
            </div>
          </div>
          <div class="dom-sec6-box1-right"></div>
        </div>

        <div class="dom-sec6-box2">
          <div class="dom-sec6-box2-left"></div>
          <div class="dom-sec6-box2-right">
            <div class="dom-sec6-box2-right-inner">
              <div class="dom-sec6-box2-right-h">Brick Paving</div>
              <div class="dom-sec6-box2-right-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque alias dolorem ex delectus earum
                cupiditate quasi aliquam reprehenderit nisi aperiam provident incidunt ab!</div>
            </div>
          </div>
        </div>

        <div class="dom-sec6-box1">
          <div class="dom-sec6-box1-left">
            <div class="dom-sec6-box1-left-inner">
              <div class="dom-sec6-box1-left-h">Aggregate Paving</div>
              <div class="dom-sec6-box1-left-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque alias dolorem ex delectus earum
                cupiditate quasi aliquam reprehenderit nisi aperiam provident incidunt ab!</div>
            </div>
          </div>
          <div class="dom-sec6-box1-right"></div>
        </div>

        <div class="dom-sec6-box2">
          <div class="dom-sec6-box2-left"></div>
          <div class="dom-sec6-box2-right">
            <div class="dom-sec6-box2-right-inner">
              <div class="dom-sec6-box2-right-h">Colored Concrete Paving</div>
              <div class="dom-sec6-box2-right-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, commodi explicabo ducimus beatae iusto enim eaque alias dolorem ex delectus earum
                cupiditate quasi aliquam reprehenderit nisi aperiam provident incidunt ab!</div>
            </div>
          </div>
        </div>

        <button><a href="">READ MORE</a></button>
      </div>


      {/* ----------------------- sec 4 --------------------- */}


      {/* ----------------------- sec 5 --------------------- */}


      {/* ----------------------- sec 6 --------------------- */}


      {/* ----------------------- sec 7 --------------------- */}


      {/* ----------------------- footer --------------------- */}



    </div>
  );
}

export default App;
