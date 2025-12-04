/**
 * VSC themes for prism-react-renderer
 * Based on Visual Studio Code Light+ and Dark+ themes
 */

const vscLightPlusTheme = {
  plain: {
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#008000",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value", "template-punctuation"],
      style: {
        color: "#A31515",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#000000",
      },
    },
    {
      types: ["number", "boolean", "constant", "inserted"],
      style: {
        color: "#098658",
      },
    },
    {
      types: ["atrule", "keyword", "interpolation-punctuation"],
      style: {
        color: "#0000FF",
      },
    },
    {
      types: ["function", "deleted"],
      style: {
        color: "#795E26",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#795E26",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#800000",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#800000",
      },
    },
    {
      types: ["attr-name", "variable", "parameter"],
      style: {
        color: "#001080",
      },
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: {
        color: "#267F99",
      },
    },
    {
      types: ["regex", "important"],
      style: {
        color: "#811F3F",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#001080",
      },
    },
  ],
};

const vscDarkPlusTheme = {
  plain: {
    color: "#D4D4D4",
    backgroundColor: "#1E1E1E",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#6A9955",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value", "template-punctuation"],
      style: {
        color: "#CE9178",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#D4D4D4",
      },
    },
    {
      types: ["number", "boolean", "constant", "inserted"],
      style: {
        color: "#B5CEA8",
      },
    },
    {
      types: ["atrule", "keyword", "interpolation-punctuation"],
      style: {
        color: "#569CD6",
      },
    },
    {
      types: ["function", "deleted"],
      style: {
        color: "#DCDCAA",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#DCDCAA",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#569CD6",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D",
      },
    },
    {
      types: ["attr-name", "variable", "parameter"],
      style: {
        color: "#9CDCFE",
      },
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: {
        color: "#4EC9B0",
      },
    },
    {
      types: ["regex", "important"],
      style: {
        color: "#D16969",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#D7BA7D",
      },
    },
  ],
};

module.exports = { vscLightPlusTheme, vscDarkPlusTheme };