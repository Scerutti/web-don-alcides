import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
SwiperCore.use([Navigation, Pagination, Parallax]);

const Intro5 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    removeSlashFromPagination();
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header id="arch-slider" className="slider arch-slider">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            <SwiperSlide className="swiper-slide">
              <div
                className="bg-img valign"
                style={{ backgroundImage: `url(/img/arch/slid/1.jpg)` }}
                data-overlay-dark="6"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <div className="caption mt-30">
                        <h1>Carniceria Don Alcides</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : null}
      </div>
    </header>
  );
};

export default Intro5;
