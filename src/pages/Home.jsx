import React from "react";

import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import products from "../assets/fake-data/products";
import heroImg from "../assets/images/hero.png";
import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/category/Category";
import ProductCard from "../components/UI/product-card/productCard";
import "../styles/hero_section.css";
import "../styles/home.css";

import networkImg from "../assets/images/network.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import { useEffect, useState } from "react";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import whyImg from "../assets/images/location.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import TestimonialSlider from "../components/slider/TestimonialSlider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    title: "Super Dine in",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content hero_title">
                <h5 className="mb-3 ">Easy way to make an order</h5>
                <h1 className="mb-4">
                  <span>Hungry? </span>just wait <br /> food
                  <span> at your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br></br>
                  Voluptatibus, praesentium.
                </p>
                <div className="hero_btns d-flex align-items-center gap-5">
                  <button className="btn btn-dark">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className=" btn btn-danger ">
                    <Link to="/foods">See Al Foods</Link>
                  </button>
                </div>

                <div className="hero_service d-flex align-items-center gap-4 mt-6">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we hero service</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="feature_text">
                Lorem ipsum doloradipisicing elit. Veniam ipsa aspernatur fugit?
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col
                lg="4"
                md="4"
                sm="6"
                xs="6"
                key={index}
                className="mt-5 feature_item_item"
              >
                <div className="feature_item px-5 py-3 text-center justify-content-center">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className=" pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center popular_foods">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-5">
                <button
                  className={`all_btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" /> Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" /> Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" /> Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img
                src={whyImg}
                alt="why-tasty-treat"
                className="w-100 whyImg"
              />
            </Col>
            <Col lg="6" md="6" className="why_section">
              <div className="why_tasty_treat">
                <h2 className="tasty_treat-title text-center pb-5">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty_treat-desc pb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  nostrum veniam.
                </p>
                <ListGroup className="mt-2 icon_content">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2 fw-bold ">
                      <i className=" icon ri-checkbox-circle-line"></i>Fresh and
                      Tasty Foods
                    </p>
                    <p className="tasty_treat-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2 fw-bold">
                      <i className=" icon ri-checkbox-circle-line"></i>Quality
                      Support Foods
                    </p>
                    <p className="tasty_treat-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="d-flex align-items-center gap-2 fw-bold">
                      <i className=" icon ri-checkbox-circle-line"></i>Order
                      From Anywhere
                    </p>
                    <p className="tasty_treat-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 hot_pizza">
              <h2>
                Hot <span className="pizza">Pizza</span>
              </h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xm="12" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className=" testimoial_subtitle text-center pt-5">
                  Testimonial
                </h5>
                <h2 className="testimoial_title text-center pt-3">
                  What our <span>customers </span>are saying
                </h2>
                <p className="testimonials_desc pt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi id porro obcaecati quis animi magni, laudantium eius.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img
                src={networkImg}
                alt="testimonial - img"
                className="w-100 networkImg"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
