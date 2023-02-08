import React from "react";
import { Container, Row } from "react-bootstrap";
import about from "../../Image/firstcart.jpg";
import people from "../../Image/people.jpg";
import mission from "../../Image/image.png";
import { Col } from "react-bootstrap";
import "./../style.css";

const About = () => {
  return (
    <div className="about">
      <Container>
        <h5>About Us</h5>
        <h2>"Experience the joy of shopping with</h2>
        <h1>Om Clothing."</h1>
        <Row>
          <Col className="param">
            <p>
              Welcome to our e-commerce store! We are a team of passionate
              individuals dedicated to providing the best products and shopping
              experience to our customers. With a vast selection of quality
              items, competitive prices, and fast shipping, we aim to make every
              purchase a memorable one.
            </p>
          </Col>

          <Col className="image">
            <img src={about} alt="" width={"500px"} />
          </Col>
        </Row>
      </Container>
      <Container className="story">
        <h1>Our Story</h1>
        <Row className="ml-3">
          <Row className="m-auto">
            <img  className="image-1" src={people} alt="" width={"600px"}/>
          </Row>
          <Row className="param mt-5">
            <p>
              {" "}
              Founded in 2022, our e-commerce store was created with the goal of
              bringing the convenience of online shopping to customers around
              the world. We understand the importance of having access to a wide
              range of products and the convenience of shopping from the comfort
              of your own home. That's why we work hard to curate a diverse
              collection of products and provide a seamless shopping
              experience.Our team consists of experienced and dedicated
              professionals who are committed to providing you with the best
              possible shopping experience. Our mission is to make your life
              easier by offering a convenient, one-stop-shop for all your
              shopping needs. Whether you're searching for the latest fashion
              trends, home decor items, or beauty products, we've got you
              covered{" "}
            </p>
          </Row>
        </Row>
      </Container>

      <Container className="mt-5">
        <h1> Our Values</h1>
        <Row>
          <Col className="param mt-5">
            <p>
              At our e-commerce store, we believe in providing the highest level
              of customer satisfaction. Our mission is to offer the best
              products, at the best prices, with the best service. We take pride
              in our products and our team is dedicated to ensuring that each
              and every customer is happy with their purchase.We take pride in
              our commitment to sourcing only the highest-quality products from
              trusted suppliers. Our team carefully curates our collections to
              ensure that each and every item you purchase from us is of the
              best possible quality.So why wait? Start shopping now and discover
              our amazing range of products. Our user-friendly website makes
              shopping a breeze, and with our fast and reliable shipping, you'll
              receive your purchases in no time!{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mission">
        <h1>Our Mission</h1>
        <Row>
          <Col className="param">
            <p>
              Our team is dedicated to providing you with the best customer
              service, and our mission is to make your shopping experience as
              easy and convenient as possible. Whether you're looking for the
              latest fashion trends, home decor items, or beauty products, we've
              got you covered. We source only the highest-quality products from
              trusted suppliers and carefully curate our collections to ensure
              that every item you purchase from us is of the best possible
              quality.
            </p>
          </Col>
          <Col className="image-2"><img src={mission} width={"500px"}/></Col>
        </Row>
      </Container>

      {/* <h1>A Warm Thank you!</h1>
      Thank you for choosing our e-commerce store. We look forward to serving
      you and making your shopping experience an enjoyable one. */}
    </div>
  );
};

export default About;
