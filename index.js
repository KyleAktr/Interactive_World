let container = document.querySelector("body");

container.addEventListener("mousemove", function (e) {
  let distanceX = e.clientX - monImage.offsetLeft - monImage.offsetWidth / 2;
  let distanceY = e.clientY - monImage.offsetTop - monImage.offsetHeight / 2;

  monImage.style.transform =
    "translate(" +
    distanceX / 40 +
    "px, " +
    Math.max(distanceY / 40, 0) +
    "px)";
});

container.addEventListener("mouseleave", function (e) {
  monImage.style.transform = "translate(0, 0) scale(1)";
});
