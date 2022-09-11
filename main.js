(function($) {
  const generateColorBtn = $.querySelector("#generate")
  const hexTextsDOM = $.querySelectorAll(".hex-text")
  const cardColors = $.querySelectorAll(".card-color")
  const colorDetails = $.querySelector(".color-details")
  const randomHexColor = () => {
    cardColors.forEach((cardColor) => {
      let hexColor = (Math.random() * 0xffffff * 1000000).toString(16)
      let result = "#" + hexColor.slice(0, 6)
      hexTextsDOM.forEach((hexText) => hexText.innerHTML = result)
      cardColor.style.background = result
      cardColor.addEventListener("click", () => {
        colorDetails.style.display = "flex"
        colorDetails.style.background = result
        let inputCreateDOM = $.createElement("input")
        inputCreateDOM.value = result
        $.body.appendChild(inputCreateDOM)
        inputCreateDOM.select()
        $.execCommand("copy")
        inputCreateDOM.style.display = "none"
        $.body.style.overflow = "hidden"
        let copiedTextTimeout = setTimeout(() => {
          colorDetails.style.display = "none"
          $.body.style.overflow = "visible"
          clearInterval(copiedTextTimeout)
        }, 1500)
      })
      cardColor.innerHTML = `<h3 class="hex-text">${result}</h3>`
    })
  }
  generateColorBtn.addEventListener("click", randomHexColor)
  randomHexColor()
})(document)