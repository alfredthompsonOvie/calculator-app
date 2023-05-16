const btnsArry = [
  {
    text: 7,
    value: 7,
  },
  {
    text: 8,
    value: 8,
  },
  {
    text: 9,
    value: 9,
  },
  {
    text: 'Del',
    value: 'del',
  },
  {
    text: 4,
    value: 4,
  },
  {
    text: 5,
    value: 5,
  },
  {
    text: 6,
    value: 6,
  },
  {
    text: "+",
    value: "+",
  },
  {
    text: 1,
    value: 1,
  },
  {
    text: 2,
    value: 2,
  },
  {
    text: 3,
    value: 3,
  },
  {
    text: "-",
    value: "-",
  },
  {
    text: ".",
    value: ".",
  },
  {
    text: 0,
    value: 0,
  },
  {
    text: "/",
    value: "/",
  },
  {
    text: "x",
    value: "x",
  },
  {
    text: "RESET",
    value: "RESET",
  },
  {
    text: "=",
    value: "=",
  },
];
function createButtons() {
  const keyPad = document.querySelector("#keyPad");
  
  btnsArry.forEach(btn => {
    const markup = `
    <button class="keyPad__btn" data-keyPad="${btn.value}" >${btn.text}</button>
    `;
    keyPad.insertAdjacentHTML('beforeend', markup);
  })

 }
export { createButtons };
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/alfredthompsonOvie/calculator-app.git
git push -u origin main