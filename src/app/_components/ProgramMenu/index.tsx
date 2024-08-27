import { Header } from "@/payload/payload-types";
import { headers } from "next/headers";
import React from "react";

interface Props {
  onClose: () => void;
  header?: Header;
}

const ProgramMenu = ({ onClose, header }: Props) => {
  return (
    <nav
      className="site-header__top-menu__menu-modal"
      id="headerProgramMenuModal"
    >
      <div className="container g-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="site-header__top-menu__menu-modal__program">
              <h2 className="mb-20px w-mc">Portal Funduszy Europejskich</h2>
              <a className="link-arrow" href="#">
                <span>PRZEJDŹ DO PORTALU</span>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1.04265 1.03198L6.65967 6.649L1.04265 12.266"
                    stroke="#003399"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
            {/* <button className="site-header__top-menu__menu-modal__close" aria-label="Zamknij okno z listą programów" onclick="menuProgramsExpandClick()" id="menuProgramsClose"> */}
            <button
              className="site-header__top-menu__menu-modal__close"
              aria-label="Zamknij okno z listą programów"
              id="menuProgramsClose"
              onClick={onClose}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5418 8.45825L8.4585 20.5416"
                  stroke="#003399"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.4585 8.45825L20.5418 20.5416"
                  stroke="#003399"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="visually-hidden">
                Zamknij okno z listą programów
              </span>
            </button>
          </div>
          <hr className="hr mb-40px" />
          <div className="col-12 col-md-9"></div>
          <hr className="hr-light mt-30px" />
        </div>

        {header?.programs?.map((program) => (
          <div className="row g-0 mb-40px">
            <div className="col-12 col-md-3">
              <div className="site-header__top-menu__menu-modal__program">
                <h2>{program.title}</h2>
                <p>Sprawdź Fundusze na dany cel, realizowane w całym kraju</p>
              </div>
            </div>
            <div className="col-12 custom-col">
              <ul className="list-unstyled site-header__top-menu__menu-modal__list-doted">
                {program.programItem.map((item) => (
                  <li>
                    <a href={item.url}>
                      <span
                        className="site-header__top-menu__menu-modal__list-doted--dot"
                        style={{ background: `${item.color}` }}
                      ></span>
                      {item.linkTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="row g-0">
          <hr className="hr-light mb-40px" />
          <div className="col-12 col-md-3">
            <div className="site-header__top-menu__menu-modal__program">
              <h2>Krajowy Plan Odbudowy</h2>
              <p className="mb-10px">
                Sprawdź, co oferują Fundusze
                <br />w krajowym planie
              </p>
              <a className="link-arrow" href="#">
                <span>STRONA KPO</span>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1.04265 1.03198L6.65967 6.649L1.04265 12.266"
                    stroke="#003399"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-9"></div>
          <hr className="hr-dark mt-30px" />
        </div>
      </div>
    </nav>
  );
};

export default ProgramMenu;
