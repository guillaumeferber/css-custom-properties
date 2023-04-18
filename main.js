const properties = [
    {
      name: "--scale",
      initialValue: 1,
      inherits: false,
      syntax: "<number>",
    },
    {
      name: "--opacity",
      initialValue: 1,
      inherits: false,
      syntax: "<number>",
    },
    {
      name: "--background-color",
      initialValue: "#ffffff",
      inherits: false,
      syntax: "<color>",
    },
    {
      name: "--translate-x",
      initialValue: 0,
      inherits: true,
      syntax: "<number>",
    },
    {
      name: "--translate-y",
      initialValue: 0,
      inherits: true,
      syntax: "<number>",
    },
  ];

  // Register the CSS custom properties
  for (const prop of properties) {
    CSS.registerProperty(prop);
  }

  // Register event listeners
  document.querySelector(".menu__item-center").addEventListener("click", (e) => e.target.classList.toggle("active"));
