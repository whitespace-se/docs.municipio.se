const sidebars = {
  defaultSidebar: [
    { type: "doc", id: "index" },
    {
      type: "category",
      label: "Redaktör",
      items: [
        "editor/index",
        "editor/logga-in",
        "editor/skapa-en-ny-sida",
        "editor/publicera-en-nyhet",
        "editor/bilder-mediabiblioteket",
        {
          type: "category",
          label: "Anslagstavla",
          items: [
            "editor/anslagstavla/index",
            "editor/anslagstavla/test",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Administratör",
      items: [
        "admin/index",
        "admin/anvandarkonton",
      ],
    },
    {
      type: "category",
      label: "Utvecklare",
      items: [
        "developer/index",
      ],
    },
  ],
};

module.exports = sidebars;
