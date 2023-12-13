import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Kenapa Memilih Kami</h2>
              <p>
              Pilihlah kami sebagai destinasi terbaik untuk mengeksplorasi dunia musik. Instruktur berkualitas dan kurikulum mendalam menawarkan pengalaman belajar yang unik. Fleksibilitas jadwal, kelas khusus, dan dukungan komunitas membuat setiap langkah lebih bermakna. Kami berkomitmen memberikan pelajaran berkualitas tinggi dalam lingkungan ramah dan inspiratif. Bergabunglah dan temukan potensi musikal Anda, karena di sini, setiap nada memiliki arti mendalam.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=UQr1hGS_4Nw"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
