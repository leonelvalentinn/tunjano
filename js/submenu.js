let listElements = document.querySelectorAll(".submenu");
let btn = document.getElementById("servicios-mov");

  btn.addEventListener("click", () => {

    let height = 0;
    if (listElements.clientHeight == "0") {
      height = listElements.scrollHeight;
    }

    listElements.style.height = `${height}px`;
  });