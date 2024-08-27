import React, { useEffect, useState } from "react";
import { Header } from "@/payload/payload-types";

interface Props {
  header: Header | undefined;
}

const FirstLeftMenu = ({ header }: Props) => {
  // const header: Header = await getHeader();

  return (
    <>
      {header?.leftMenu?.map((item) => (
        <li className=" blank-class-validator">
          <span className="visually-hidden">Fundusze dla</span>
          <a
            href={item.url}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-custom-className="header-tooltip"
            data-bs-html="true"
            title={item.linkName}
          >
            {item.linkName}
          </a>
        </li>
      ))}
    </>
  );
};

export default FirstLeftMenu;
