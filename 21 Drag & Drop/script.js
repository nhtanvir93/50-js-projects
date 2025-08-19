const dragObject = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

dragObject.addEventListener("dragstart", function () {
  setTimeout(() => {
    this.classList.add("hidden");
  }, 0);
});

dragObject.addEventListener("dragend", function () {
  setTimeout(() => {
    this.classList.remove("hidden");
  }, 200);
});

empties.forEach(function (empty) {
  empty.addEventListener("dragenter", function (e) {
    e.preventDefault();
    this.classList.add("hover");
  });

  empty.addEventListener("dragleave", function () {
    this.classList.remove("hover");
  });

  empty.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  empty.addEventListener("drop", function () {
    this.classList.remove("hover");
    this.append(dragObject);
  });
});
