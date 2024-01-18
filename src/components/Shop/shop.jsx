import React from "react";
import ShopStore from "../Shop-store/shop-store";
import axios from "axios";

const Shop = () => {
  const [productCopy, setProductCopy] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [filterProducts, setFilterProducts] = React.useState([]);
  const totalProducts = products?.length;
  const [currentPage, setCurrentPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const fetchProducts = () =>
    axios.get(`${process.env.NEXT_APP_URL_BACK}/products`).then((res) => {
      setProducts(res.data);
      setProductCopy(res.data);
    });

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    setFilterProducts([...products].splice(0, itemPerPage));
    setCurrentPage(0);
  }, [products]);

  const itemPerPage = 6;

  const nextHandler = () => {
    const totalItems = products.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemPerPage;
    if (firstIndex >= totalItems) return;
    setFilterProducts([...products]?.splice(firstIndex, itemPerPage));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * itemPerPage;
    setFilterProducts([...products]?.splice(firstIndex, itemPerPage));
    setCurrentPage(prevPage);
  };

  const handleSort = (orden) => {
    const sortByLowestPrice = (a, b) =>
      parseFloat(a.price) - parseFloat(b.price);
    const sortByHighestPrice = (a, b) =>
      parseFloat(b.price) - parseFloat(a.price);
    if (orden === "asc") {
      const arrayOrdenado = products.slice().sort(sortByLowestPrice);
      setProducts(arrayOrdenado);
    } else {
      if (orden === "desc") {
        const arrayOrdenado = products.slice().sort(sortByHighestPrice);
        setProducts(arrayOrdenado);
      } else {
        setProducts(productCopy);
      }
    }
    setCurrentPage(0);
  };

  const handleSearchBar = () => {
    if (search !== "") {
      const filterSearchBar = productCopy.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filterSearchBar);
    } else {
      setProducts(productCopy);
    }
    setCurrentPage(0);
  };

  return (
    <section className="shop section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ShopStore
              products={filterProducts}
              totalProducts={totalProducts}
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              currentPage={currentPage}
              handleSearchBar={handleSearchBar}
              setSearch={setSearch}
              handleSort={handleSort}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
