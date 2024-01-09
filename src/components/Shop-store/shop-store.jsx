import React from "react";
import { Button, Modal } from "react-bootstrap";
import products from "../../data/products.json";

const ShopStore = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };
  return (
    <div className="store">
      <div className="col-lg-12 text-center justify-content-center">
        <div className="search mb-30">
          <div className="form-group d-flex align-items-center">
            <input
              type="text"
              name="shop-search"
              className="form-control"
              placeholder="Search"
            />
            <button className="btn btn-danger ml-2">
              <span className="icon pe-7s-search"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="top-area">
        <div className="row text-center">
          <div className="col-lg-4 valign">
            <div className="result-text">
              <span> 12 of 30 Results</span>
            </div>
          </div>
          <div className="col-lg-8 d-flex justify-content-end">
            <div className="filter-select">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Ordenar por precio</option>
                <option value="1">Ordenar de mayor a menor</option>
                <option value="2">Ordenar de menor a mayor</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {products?.map((p) => (
          <div key={p._id} className="col-lg-4 col-md-6">
            <div className="item">
              <div className="img">
                <img src="/img/mobile-app/shop/1.jpg" alt="" />

                <div className="add">
                  <a
                    onClick={() => handleShow(p)}
                    style={{ cursor: "pointer" }}
                  >
                    Ver detalles <span className="pe-7s-angle-right"></span>
                  </a>
                </div>
              </div>
              <div className="info">
                <h6>{p.name}</h6>
                <span>{p.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <img src="/img/mobile-app/shop/1.jpg" alt="" />
          <h4>{selectedProduct?.name}</h4>
          <p>{selectedProduct?.description}</p>
          <p>Precio: ${selectedProduct?.price}</p>
          <form>
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              /* Agregar a carrito */
            }}
          >
            Agregar al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShopStore;
