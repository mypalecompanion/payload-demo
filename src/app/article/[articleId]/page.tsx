import ArticleContent from "@/app/_components/ArticleContent";
import { Article } from "@/payload/payload-types";
import React from "react";

interface Props {
  params: {
    articleId: string;
  };
}

const getArticleById = async (articleId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/articles/${articleId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  return response.json();
};

const ArticlePage = async ({ params }: Props) => {
  const article = (await getArticleById(params.articleId)) as Article;

  return (
    <div className="container news-card-wrapper mt-4">
      <section className="news-widget-header">
        <div className="d-flex flex-wrap d-lg-block clearfix mt-lg-3 position-relative pb-5 pb-lg-0">
          <div className="col-12 col-lg-8 order-1 float-lg-end ">
            <figure className="ratio ratio-21x9 mb-3 mb-lg-0 border-12px overflow-hidden">
              {article.poster && (
                <img
                  className="object-cover"
                  src={article.poster.toString()}
                  alt="Sejm rozpoczął pracę nad ustawą wdrożeniową na lata 2021-2027"
                  aria-labelledby="cardTitleHeader"
                />
              )}
            </figure>
          </div>
          <div className="col-12 col-lg-4 order-2 mb-15px ">
            <div className="d-flex flex-wrap feux-border-top-lg-regio me-lg-3 pt-lg-4"></div>
          </div>
          <header id="cardTitleHeader" className="col-12 col-lg-4 order-3">
            <h2 className="card-header-wrapper__title  mb-3 me-lg-3">
              Sejm rozpoczął pracę nad ustawą wdrożeniową na lata 2021-2027
            </h2>
            <span className="card-header-wrapper__breadcrumb">
              <a href="#">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.68595 0.185717C4.85951 0.0121504 5.14092 0.0121504 5.31449 0.185717L9.75893 4.63016C9.84228 4.71351 9.88911 4.82656 9.88911 4.94443V10.5C9.88911 10.7454 9.69012 10.9444 9.44466 10.9444H0.555773C0.310313 10.9444 0.111328 10.7454 0.111328 10.5V4.94443C0.111328 4.82656 0.158153 4.71351 0.241503 4.63016L4.68595 0.185717ZM1.00022 5.12853V10.0555H9.00022V5.12853L5.00022 1.12853L1.00022 5.12853Z"
                    fill="#003399"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.33322 6.49997V10.5C4.33322 10.7454 4.13424 10.9444 3.88878 10.9444C3.64332 10.9444 3.44434 10.7454 3.44434 10.5V6.49997C3.44434 6.32536 3.47224 6.13924 3.55237 5.97899C3.63216 5.81941 3.81085 5.61108 4.111 5.61108H5.88878C6.18894 5.61108 6.36763 5.81941 6.44741 5.97899C6.52754 6.13924 6.55545 6.32536 6.55545 6.49997V10.5C6.55545 10.7454 6.35646 10.9444 6.111 10.9444C5.86554 10.9444 5.66656 10.7454 5.66656 10.5V6.49997H4.33322Z"
                    fill="#003399"
                  ></path>
                </svg>
                <span className="visually-hidden">
                  Przejdź do strony głównej portalu
                </span>
              </a>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.97982 0.979862C1.17508 0.7846 1.49166 0.7846 1.68693 0.979862L4.35359 3.64653C4.54886 3.84179 4.54886 4.15837 4.35359 4.35363L1.68693 7.0203C1.49167 7.21556 1.17508 7.21556 0.979821 7.0203C0.784559 6.82504 0.784559 6.50846 0.979821 6.31319L3.29293 4.00008L0.97982 1.68697C0.784558 1.49171 0.784558 1.17512 0.97982 0.979862Z"
                  fill="#828282"
                ></path>
              </svg>
              <a href="#">
                <span>Aktualności</span>
                <span className="visually-hidden">Przejdź do Aktualności</span>
              </a>
            </span>
          </header>
          <div className="col-12 col-lg-4 order-4 position-absolute bottom-0 start-0 ">
            <div className="header-bottom-arrow-bg pb-3 me-3">
              <p className="mb-0 me-lg-3 card-header-wrapper__place">
                22.12.2022
              </p>
            </div>
          </div>
        </div>
      </section>
      <ArticleContent article={article} />
    </div>
  );
};

export default ArticlePage;
