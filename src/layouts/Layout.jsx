import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constans";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter(
        (p) =>
          p.title.includes(searchText) || String(p.price).includes(searchText)
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main className="content container">
        <section className="section">
          <div className="search">
            <div className="search__input field">
              <input
                type="text"
                className="field__input"
                placeholder="Поиск по объявлениям"
                value={searchText}
                onChange={handleSearch}
              />
            </div>
            <button
              className="search__button button"
              onClick={handleSearchArray}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                width="14px"
                height="14px"
                fill-rule="nonzero"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M13,3c-5.51133,0 -10,4.48867 -10,10c0,5.51133 4.48867,10 10,10c2.39665,0 4.59741,-0.85106 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41261,-1.72486 2.26367,-3.92561 2.26367,-6.32227c0,-5.51133 -4.48867,-10 -10,-10zM13,5c4.43067,0 8,3.56933 8,8c0,4.43067 -3.56933,8 -8,8c-4.43067,0 -8,-3.56933 -8,-8c0,-4.43067 3.56933,-8 8,-8z"></path>
                  </g>
                </g>
              </svg>
              Найти
            </button>
          </div>
        </section>
      </main>
      <Outlet context={{ products }} />
    </>
  );
};
