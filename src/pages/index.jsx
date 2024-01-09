import React from "react";
import Navbar from "../components/Navbar/navbar";
import AboutUs from "../components/About-us/about-us";
import Blogs1 from "../components/blogs/Blogs1/blogs1";
import appData from "../data/app.json";
import LightTheme from "../layouts/Light";
import Intro5 from "../components/Intro5/intro5";
import FooterArch from "../components/Footer-arch/footer-arch";
import Works2 from "../components/Works2/works2";
import products from "../data/products.json";

const Home = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro5 />
      <Works2 productsFeat={products} />
      <Blogs1 />
      <AboutUs />
      <FooterArch />
    </LightTheme>
  );
};

export default Home;
