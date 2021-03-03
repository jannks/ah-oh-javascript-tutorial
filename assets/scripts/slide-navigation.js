// navigation
let pageRegister = ["data-types", "welcome", "json", "operators"];

function navigate(direction) {
  let pageIndex = 0;

  for (let i = 0; i < pageRegister.length; i++) {
    let ele = pageRegister[i];

    if (window.location.href.includes(ele)) {
      pageIndex = i;
      break;
    }
  }

  if (direction === "+") {
    if (pageIndex + 1 < pageRegister.length) {
      pageIndex++;
    } else {
      pageIndex = 0;
    }
  } else if (direction === "-") {
    if (pageIndex - 1 >= 0) {
      pageIndex--;
    } else {
      pageIndex = pageRegister.length - 1;
    }
  }

  window.location.href = "/slides/" + pageRegister[pageIndex] + ".html";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("next").addEventListener("click", function() {
    navigate("+");
  });
  document.getElementById("prev").addEventListener("click", function() {
    navigate("-");
  });
});
