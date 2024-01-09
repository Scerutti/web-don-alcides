import React from "react";
import ShopStore from "../Shop-store/shop-store";

const Shop = () => {
  return (
    <section className="shop section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ShopStore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
