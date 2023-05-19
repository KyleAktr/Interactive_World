let container = document.querySelector("body");

container.addEventListener("mousemove", (e) => {
  let distanceX = e.clientX - monImage.offsetLeft - monImage.offsetWidth / 2;
  let distanceY = e.clientY - monImage.offsetTop - monImage.offsetHeight / 2;

  console.log(e);

  monImage.style.transform =
    "translate(" +
    distanceX / 40 +
    "px, " +
    Math.max(distanceY / 20, 0) +
    "px)";
});

container.addEventListener("mouseleave", (e) => {
  monImage.style.transform = "translate(0, 0)";
});
