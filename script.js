document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const buttonNo = document.getElementById("button-no");
  
    buttonNo.addEventListener("click", function () {
      container.removeChild(buttonNo);
    });
  
    const buttonYes = document.getElementById("button-yes");
  
    buttonYes.addEventListener("click", function () {
      alert("Eu te amo, bocó. Confia em mim?");
    });
  
    container.addEventListener("mousemove", function (event) {
      moveButton(event);
    });
  
    function moveButton(event) {
      const buttonNoRect = buttonNo.getBoundingClientRect();
      if (
        Math.abs(event.clientX - buttonNoRect.x) < 50 &&
        Math.abs(event.clientY - buttonNoRect.y) < 40
      ) {
        const x = Math.random() * (window.innerWidth - buttonNoRect.width);
        const y = Math.random() * (window.innerHeight - buttonNoRect.height);
        buttonNo.style.left = x + "px";
        buttonNo.style.top = y + "px";
      }
    }
  });
  