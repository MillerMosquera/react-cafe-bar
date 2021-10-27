import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../menu/menu.css";
import Swal from "sweetalert2";
import Button from '../menu/buttonPdf'

function usePagination() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(12);
  const [pageCount, setPageCount] = useState(0);


  //useLocalSotrage

  const getData = async () => {
    const res = await axios.get(
      `https://617716f19c328300175f57cb.mockapi.io/menu`
    );
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <section key={pd.id} className="menu">
        <div className="container">
          <div className="menu-container">
            <div className="menu-item filter-starters">
              <img src={pd.imgSrc} className="menu-img" alt=""/>
              <div className="menu-content">
                <label className="nombre">{pd.title}</label>
                <span className="precio">{pd.precio}</span>
              </div>
              <div className="menu-ingredients">
                <p className="descrip">
                  {pd.descripcion}
                  <i
                    className="bi-cart add-to-cart-btn"
                    onClick={() => alertamsg()}
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  //Mensaje de confirmacion
  const alertamsg = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Agregado al carrito",
    });
  };

  return (
    <section className="section">
      <label className="text-menu">Menú</label>
      <Button/>
      <div className="platos-menu">{data}</div>
      <div>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </section>
  );
}

export default usePagination;