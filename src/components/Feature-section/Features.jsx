import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Belajar Cepat",
    desc: "Mengembangkan keterampilan belajar cepat membuka pintu sukses. Dengan fokus, konsistensi, dan metode efektif, Anda capai tujuan belajar dengan efisien.",
    icon: "ri-draft-line",
  },

  {
    title: "Dukungan Panjang",
    desc: "Bantuan Terus-menerus: kami siap membantu dan memandu Anda setiap langkah. Kembangkan potensi maksimal dengan dukungan tanpa batas dari tim kami.",
    icon: "ri-discuss-line",
  },

  {
    title: "Sertifikasi",
    desc: "Sertifikasi Berkualitas: Capai pengakuan resmi dengan sertifikasi kami. Validasi kompetensi Anda dalam dunia yang kompetitif dan tingkatkan peluang karier Anda.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
