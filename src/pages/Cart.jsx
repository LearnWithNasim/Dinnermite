import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-product.css";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <>
                  <h5 className="text-center">Your cart is empty</h5>
                  <hr />
                </>
              ) : (
                <table className="table table_bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="text-end py-4 price_content">
                <h6 className="cart_subtotal">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart_page-btn d-flex gap-4 justify-content-end">
                  <button className="addToCart_btn ">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart_btn">
                    <Link to="/checkout">Procces to Checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="cart_img-box">
        <img src={image01} alt="" className="" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}px</td>
      <td onClick={deleteItem}>
        <i className="ri-delete-bin-line cart_item-del"></i>
      </td>
    </tr>
  );
};

export default Cart;
