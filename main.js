export const name = 'cssCustomProperties';
function generateCssCustomProperties() {
    const properties = [
        {
          name: "--scale",
          initialValue: 1,
          inherits: false,
          syntax: "<number>"
        },
        {
          name: "--opacity",
          initialValue: 1,
          inherits: false,
          syntax: "<number>"
        },
        {
          name: "--background-color",
          initialValue: "white",
          inherits: false,
          syntax: "<color>"
        },
        {
          name: "--box-shadow",
          initialValue: "0 3px 12px 3px rgba(#484648, 0.12)",
          inherits: false,
        }
      ];
      properties.forEach(function (prop) {
        CSS.registerProperty(prop);
      });

    return properties;
}

function registerEventListeners() {
    const center = document.querySelector(".menu__item-center");
    center.addEventListener("click", function (e) {
        const target = e.target;
        if (!target.classList.contains("active")) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
    });
}
generateCssCustomProperties();
registerEventListeners();