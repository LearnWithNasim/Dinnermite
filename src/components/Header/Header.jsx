import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import Logo from "../../assets/images/res-logo.png";
import "../../styles/header.css";

import { useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const Nav_Links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between ">
          <div className="logo">
            <img src={Logo} alt="" />

            <h5>Tasty Treat</h5>
          </div>
          {/* { ==== menu ======} */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {Nav_Links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* { ==== Nav Right Icons ======} */}
          <div className="nav_right d-flex align-items-center justify-content-between gap-4">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
