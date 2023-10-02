let pointer = document.querySelector(".moving-cursor");
window.addEventListener("mousemove", cursor);
function cursor(event) {
  pointer.style.top = event.pageY + "px";
  pointer.style.left = event.pageX + "px";
}

let nav_items = document.querySelectorAll(".nav-item");

nav_items.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    pointer.classList.add("cursor-grow");
  });
  element.addEventListener("mouseleave", () => {
    pointer.classList.remove("cursor-grow");
  });
});
