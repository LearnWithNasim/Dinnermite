import React from "react";
import ReactPaginate from "react-paginate";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import products from "../assets/fake-data/products";
import ProductCart from "../components/UI/product-card/productCard";

import { useState } from "react";
import "../styles/al-foods.css";
import "../styles/paginaton.css";

const AlFoods = () => {
  const [searchItem, setSearchItem] = useState("");
  // const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);

  const searchProduct = products.filter((item) => {
    if (searchItem.value === "") return item;
    if (item.title.toLowerCase().includes(searchItem.toLowerCase()));
    return item;
  });

  const productPerPage = 12;
  const visitededPage = pageNumber * productPerPage;
  const displayPage = searchProduct.slice(
    visitededPage,
    visitededPage + productPerPage
  );

  const pageCount = Math.ceil(searchProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="search_widget d-flex align-items-center justify-content-center w-50">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  onChange={(e) => setSearchItem(e.target.value)}
                  value={searchItem}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting_widget text-end">
                <select>
                  <option>Default</option>
                  <option value="ascending">Alphabeticallly, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage?.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="12" className="mb-4">
                <ProductCart item={item} key={index} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AlFoods;
