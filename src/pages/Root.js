import { Fragment } from "react";

import useScrollDirection from "../Hooks/use-scroll";

import Nav from "../components/Header/Nav";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import SlideSection from "../components/Products/Slide-Section/SlideSection";
import Collections from "../components/Collections/Collections";
import About from "../components/About/About";
import Messages from "../components/Messages/Messages";
import Footer from "../components/Footer/Footer";

import Icon from "../components/UI/Icon/Icon";

const Root = () => {
  const scrollDirection = useScrollDirection();
  return (
    <Fragment>
      <header className={`sticky ${scrollDirection === "down" && "in-scroll"}`}>
        <Nav />
      </header>
      <main>
        <Icon />
        <Header />
        <Info />
        <SlideSection slidesToShow="4" header="Recent Posts" />
        <SlideSection slidesToShow="3" header="Best Seller" />
        <Collections />
        <About />
        <Messages />
        <Footer />
      </main>
    </Fragment>
  );
};

export default Root;
