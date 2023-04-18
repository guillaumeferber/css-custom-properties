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
          initialValue: "#ffffff",
          inherits: false,
          syntax: "<color>"
        },
        {
            name: "--translate-x",
            initialValue: 0,
            inherits: true,
            syntax: "<number>"
        },
        {
            name: "--translate-y",
            initialValue: 0,
            inherits: true,
            syntax: "<number>"
        },
      ];
      properties.forEach(function (prop) {
        CSS.registerProperty(prop);
      });

    return properties;
}

function registerEventListeners() {
    const center = document.querySelector(".menu__item-center");
    const others = document.querySelectorAll('.menu__item:not(.menu__item-center)');
    center.addEventListener("click", function (e) {
        const target = e.target;
        if (!target.classList.contains("active")) {
            target.classList.add("active");
            others.forEach(function (o) {
                // o.style.removeProperty("animation");
            })
        } else {
            target.classList.remove("active");
            others.forEach(function (o) {
                console.log(o)
                // o.style = "animation: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s 1 reverse none running scaleUp"
            })
        }
    }, false);
    others.forEach(function (o) {
        o.addEventListener('mouseover', function (e) {
            const target = e.target;
            if (!target.classList.contains("active")) {
                target.classList.add("active");
            } else {
                target.classList.remove("active");
            }
        }, false);
        o.addEventListener('mouseout', function (e) {
            e.target.classList.remove("active");
        }, false);
    })
}
generateCssCustomProperties();
registerEventListeners();