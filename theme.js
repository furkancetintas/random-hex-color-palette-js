const THEME_OBJECTS = document.querySelectorAll(".theme")
const THEME_BUTTON = document.querySelector("#theme-button")
let theme

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    } else {
      return "light"
    }
  }
  return "light"
}
function themeF() {
  if (theme === "dark") {
    THEME_OBJECTS.forEach((themeObject) => {
      themeObject.classList.add("dark")
    })
    THEME_BUTTON.innerHTML = "Light Mode"
  } else {
    THEME_OBJECTS.forEach((themeObject) => {
      themeObject.classList.remove("dark")
    })
    THEME_BUTTON.innerHTML = "Dark Mode"
  }
}
THEME_BUTTON.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark"
  } else {
    theme = "light"
  }
  localStorage.setItem("theme", theme)

  themeF()
})
theme = localStorage.getItem("theme") ?? getPreferredColorScheme()
themeF()
