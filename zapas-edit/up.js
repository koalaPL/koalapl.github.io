configObj = {
  buttonD:
    "M16.806 13.667v-5.25c0-.967-.841-1.75-1.879-1.75-1.037 0-1.878.783-1.878 1.75v8.998c0 .912-1.073 1.472-1.907.995l-1.79-1.024c-.588-.328-1.326-.312-1.896.042-.93.578-1.061 1.805-.27 2.542l5.757 5.363h10.929l1.43-7.49c.22-1.333-.714-2.594-2.129-2.876l-6.367-1.3z",
  buttonT:
    "translate(-1208 -172) translate(832 140) translate(32 32) translate(344)",
  shadowSize:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  roundnessSize: "12px",
  buttonDToBottom: "32px",
  buttonDToRight: "32px",
  selectedBackgroundColor: "#303030",
  selectedIconColor: "#878787",
  buttonWidth: "48px",
  buttonHeight: "48px",
  svgWidth: "40px",
  svgHeight: "40px",
};
function createButton(obj, pageSimulator) {
  const body = document.querySelector("body");
  backToTopButton = document.createElement("span");
  backToTopButton.classList.add("softr-back-to-top-button");
  backToTopButton.id = "softr-back-to-top-button";
  pageSimulator
    ? pageSimulator.appendChild(backToTopButton)
    : body.appendChild(backToTopButton);
  backToTopButton.style.width = obj.buttonWidth;
  backToTopButton.style.height = obj.buttonHeight;
  backToTopButton.style.marginRight = obj.buttonDToRight;
  backToTopButton.style.marginBottom = obj.buttonDToBottom;
  backToTopButton.style.borderRadius = obj.roundnessSize;
  backToTopButton.style.boxShadow = obj.shadowSize;
  backToTopButton.style.color = obj.selectedBackgroundColor;
  backToTopButton.style.backgroundColor = obj.selectedBackgroundColor;
  pageSimulator
    ? (backToTopButton.style.position = "absolute")
    : (backToTopButton.style.position = "fixed");
  backToTopButton.style.outline = "none";
  backToTopButton.style.bottom = "0px";
  backToTopButton.style.right = "0px";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.textAlign = "center";
  backToTopButton.style.border = "solid 2px currentColor";
  backToTopButton.innerHTML =
    '<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" > <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>';
  backToTopButtonSvg = document.querySelector(".back-to-top-button-svg");
  backToTopButtonSvg.style.verticalAlign = "middle";
  backToTopButtonSvg.style.margin = "auto";
  backToTopButtonSvg.style.justifyContent = "center";
  backToTopButtonSvg.style.width = obj.svgWidth;
  backToTopButtonSvg.style.height = obj.svgHeight;
  backToTopButton.appendChild(backToTopButtonSvg);
  backToTopButtonImg = document.querySelector(".back-to-top-button-img");
  backToTopButtonImg.style.fill = obj.selectedIconColor;
  backToTopButtonSvg.appendChild(backToTopButtonImg);
  backToTopButtonImg.setAttribute("d", obj.buttonD);
  backToTopButtonImg.setAttribute("transform", obj.buttonT);
  if (!pageSimulator) {
    backToTopButton.style.display = "none";
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
    backToTopButton.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }
}
document.addEventListener("DOMContentLoaded", function () {
  createButton(configObj, null);
});
