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
            name: "--padding",
            initialValue: "0 0 0 0",
            inherits: true,
            syntax: "*"
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
        center.style.setProperty('--padding', "0 0 0 0");
        if (!target.classList.contains("active")) {
            target.classList.add("active");
        } else {
          target.classList.remove("active");
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
            const styles = getComputedStyle(center);
            switch (Object.values(o.classList)[1].split('-')[1]) {
                case 'top':
                    center.style.setProperty('--padding', "10px 0 0 0");
                    break;
                case 'right':
                    center.style.setProperty('--padding', "0 10px 0 0");
                    break;
                case 'bottom':
                    center.style.setProperty('--padding', "0 0 10px 0");
                    break;
                case 'left':
                    center.style.setProperty('--padding', "0 0 0 10px");
                    break;
            }

        }, false);
        o.addEventListener('mouseout', function (e) {
            e.target.classList.remove("active");
            center.style.setProperty('--padding', "0 0 0 0");
        }, false);
    })
}
generateCssCustomProperties();
registerEventListeners();