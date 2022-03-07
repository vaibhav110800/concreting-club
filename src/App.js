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

      <div className="sec2">

      </div>


      {/* ----------------------- sec 3 --------------------- */}


      {/* ----------------------- sec 4 --------------------- */}


      {/* ----------------------- sec 5 --------------------- */}


      {/* ----------------------- sec 6 --------------------- */}


      {/* ----------------------- sec 7 --------------------- */}


      {/* ----------------------- footer --------------------- */}



    </div>
  );
}

export default App;
