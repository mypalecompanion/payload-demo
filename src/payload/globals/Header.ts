import { GlobalConfig } from "payload/types";
import colorField from "../fields/colorPicker/config";

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "leftMenu",
      type: "array",
      required: true,
      maxRows: 6,
      fields: [
        {
          name: "linkName",
          type: "text",
          required: true,
          label: "Tytuł",
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "programs",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "programItem",
          type: "array",
          fields: [
            { name: "linkTitle", type: "text", required: true },
            { name: "url", type: "text", required: true },
            colorField,
          ],
        },
      ],
    },
  ],
};
