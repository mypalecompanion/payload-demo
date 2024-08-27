import { Article } from "@/payload/payload-types";
import React from "react";

interface Props {
  article: Article;
}

const ArticleContent = ({ article }: Props) => {
  return (
    <div className="row" id="aktualnosc-tresc">
      <div className="col-lg-8 col-12">
        {article?.content.map((block) => {
          switch (block.blockType) {
            case "quote":
              return <div>Quote</div>;
            case "imageGallery":
              return <div>ImageGallery</div>;
            case "richText":
              return <div>Rich Text</div>;
          }
        })}
      </div>
    </div>
  );
};

export default ArticleContent;
