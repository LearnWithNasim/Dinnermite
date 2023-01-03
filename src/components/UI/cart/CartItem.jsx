import React from "react";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/cart-item.css";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const increamentItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart_item">
      <div className="cart_item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart_product-info d-flex w-100 align-items-center gap-5 justify-content-between">
          <div>
            <h6 className="cart_product-title">{title}</h6>
            <p className="d-flex align-items-cneter gap-5 cart_product-price ">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="increase_decrease-btn d-flex align-items-center justify-content-between">
              <span className="increase_btn" onClick={increamentItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease_btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete_btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
