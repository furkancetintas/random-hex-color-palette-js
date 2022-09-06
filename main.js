let body = document.querySelector('body');
let generateColorBtn = document.querySelector('#generate');
let hexTextsDOM = document.querySelectorAll('.hex-text');
let copiedSpanDOM = document.getElementById('copied');

let cardColors = document.querySelectorAll('.card-color');

let colorDetails = document.querySelector('.color-details');

const randomHexColor = () => {
  cardColors.forEach((cardColor) => {
    let hexColor = (Math.random() * 0xffffff * 1000000).toString(16);
    let result = '#' + hexColor.slice(0, 6);
    hexTextsDOM.forEach((hexText) => {
      hexText.innerHTML = result;
    });
    cardColor.style.background = result;
    cardColor.addEventListener('click', () => {
      colorDetails.style.display = 'flex';
      colorDetails.style.background = result;
      let inputCreateDOM = document.createElement('input');
      inputCreateDOM.value = result;
      document.body.appendChild(inputCreateDOM);
      inputCreateDOM.select();
      document.execCommand('copy');
      inputCreateDOM.style.display = 'none';
      document.body.style.overflow = 'hidden';
      let copiedTextTimeout = setTimeout(() => {
        colorDetails.style.display = 'none';
        document.body.style.overflow = 'visible';
        clearInterval(copiedTextTimeout);
      }, 1500);
    });

    cardColor.innerHTML = `
      <h3 class="hex-text">${result}</h3>
    `;
  });
};

generateColorBtn.addEventListener('click', randomHexColor);

randomHexColor();
