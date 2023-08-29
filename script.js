function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light")

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://i.imgur.com/BhIlk19.png")
  } else {
    img.setAttribute("src", "./assets/kaguya-icon-dark.png")
  }
}