import React from "react";
import { Button, Modal } from "react-bootstrap";

const ShopStore = ({
  products,
  totalProducts,
  nextHandler,
  prevHandler,
  currentPage,
  handleSort,
  setSearch,
  handleSearchBar,
}) => {
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
              onChange={(e) => setSearch(e.target.value)}
              name="shop-search"
              className="form-control"
              placeholder="Search"
              onKeyDown={(e) =>
                e.key === "Enter" ? handleSearchBar() : undefined
              }
            />
            <button className="btn btn-danger ml-2" onClick={handleSearchBar}>
              <span className="icon pe-7s-search"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="top-area">
        <div className="row text-center">
          <div className="col-lg-4 valign">
            <div className="result-text">
              <span> mostrando 6 de {totalProducts}</span>
            </div>
          </div>
          <div className="col-lg-8 d-flex justify-content-end">
            <div className="filter-select">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option defaultValue>Ordenar por precio</option>
                <option value="asc">Ordenar de menor a mayor</option>
                <option value="desc">Ordenar de mayor a menor</option>
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
                <img src={p.image} alt="" />

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
      <div className="text-center mt-30">
        <div className="pagination justify-content-center">
          <span
            onClick={prevHandler}
            className="pagination-arrow"
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-angle-left"></i>
          </span>
          <span className="pagination-number active">
            <a>{currentPage + 1}</a>
          </span>
          <span
            onClick={nextHandler}
            className="pagination-arrow"
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-angle-right"></i>
          </span>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <img src={selectedProduct?.image} alt="" />
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
