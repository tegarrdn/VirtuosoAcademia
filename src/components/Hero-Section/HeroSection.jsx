import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Belajar Alat Musik <br /> di Mana Saja, Kapan Saja <br /> dan kuasai dengan cepat.
              </h2>
              <p className="mb-5">
              VirtuosoAcademia menawarkan pembelajaran musik fleksibel dan berkualitas. <br /> Akses kursus di mana saja, kapan saja, untuk pemula hingga musisi berpengalaman. <br /> Bergabunglah dan tingkatkan keterampilan musik Anda!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
