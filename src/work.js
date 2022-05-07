import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Menubar from "./components/menubar";
import db from "./firebase";
const Work = () => {
  const [works, setWorks] = useState([]);
  useEffect((e) => {
    db.collection("works")
      .orderBy("timestamp", "desc")
      .onSnapshot((message) => {
        setWorks(message.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
  }, []);
  return (
    <div>
      <Menubar />
      <div className="work1">
        <h1>Our Projects And Work</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          adipisci dolor, natus sunt animi doloribus voluptatem, assumenda atque
          vero tenetur ipsa? Et, similique. Pariatur vel officia natus saepe at
          labore.
        </p>

        {works.map((work) => (
          <div className="sec4-box">
            <div className="sec4-box-l">
              {work.data.image1 && (
                <img
                  style={{ height: "200px", objectFit: "cover" }}
                  src={work.data.image1}
                  alt="1"
                />
              )}
              {work.data.image2 && (
                <img
                  style={{ height: "200px", objectFit: "cover" }}
                  src={work.data.image2}
                  alt="2"
                />
              )}
              {work.data.image3 && (
                <img
                  style={{ height: "200px", objectFit: "cover" }}
                  src={work.data.image3}
                  alt="3"
                />
              )}
              {work.data.image4 && (
                <img
                  style={{ height: "200px", objectFit: "cover" }}
                  src={work.data.image4}
                  alt="4"
                />
              )}
            </div>
            <div className="sec4-box-r">
              <h1>{work.data.work}</h1>
              <div className="sec4-address">
                <i class="fas fa-map-marker-alt"></i>
                <h2>{work.data.location}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="work2">

                <div className="work2-box">
                    <div className="work2-box-l">
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                    </div>
                    <div className="work2-box-r">
                        <h1>Type of Work</h1>
                        <div className="work2-address">
                            <i class="fas fa-map-marker-alt"></i>
                            <h2>XYZ street, abc town, klj city</h2>
                        </div>
                    </div>
                </div>

                <div className="work2-box">
                    <div className="work2-box-l">
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                    </div>
                    <div className="work2-box-r">
                        <h1>Type of Work</h1>
                        <div className="work2-address">
                            <i class="fas fa-map-marker-alt"></i>
                            <h2>XYZ street, abc town, klj city</h2>
                        </div>
                    </div>
                </div>

                <div className="work2-box">
                    <div className="work2-box-l">
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                    </div>
                    <div className="work2-box-r">
                        <h1>Type of Work</h1>
                        <div className="work2-address">
                            <i class="fas fa-map-marker-alt"></i>
                            <h2>XYZ street, abc town, klj city</h2>
                        </div>
                    </div>
                </div>

                <div className="work2-box">
                    <div className="work2-box-l">
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                        <img src="./images/1.banner/1.jpg" alt="" />
                    </div>
                    <div className="work2-box-r">
                        <h1>Type of Work</h1>
                        <div className="work2-address">
                            <i class="fas fa-map-marker-alt"></i>
                            <h2>XYZ street, abc town, klj city</h2>
                        </div>
                    </div>
                </div>


            </div> */}
      <Footer />
    </div>
  );
};

export default Work;
