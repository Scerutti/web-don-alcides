import React, { useState } from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import ContactHeader from "../../components/Contact-header/contact-header";
import CartComponent from "../../components/cart-component/cart-component";
import FooterArch from "../../components/Footer-arch/footer-arch";

const Carrito = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ContactHeader blackStar />
      <div className="main-content">
        <CartComponent setModal={setModal} />
        <FooterArch />
      </div>
    </LightTheme>
  );
};

export default Carrito;
