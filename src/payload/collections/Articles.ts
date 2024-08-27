import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { slateEditor } from "@payloadcms/richtext-slate";
import { Block, CollectionConfig } from "payload/types";

export const QuoteBlock: Block = {
  slug: "quote",
  imageAltText: "A nice thumbnail image to show what this block looks like",
  fields: [
    {
      name: "quoteText",
      type: "text",
      required: true,
    },
    {
      name: "quoteSignature",
      type: "text",
      required: true,
    },
  ],
};

export const RicthTextBlock: Block = {
  slug: "richText",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: slateEditor({}),
    },
  ],
};

export const ImageGallery: Block = {
  slug: "imageGallery",
  fields: [
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "content",
      type: "blocks",
      minRows: 1,
      maxRows: 20,
      blocks: [QuoteBlock, RicthTextBlock, ImageGallery],
    },
  ],
};
