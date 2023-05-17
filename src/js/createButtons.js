const btnsArry = [
  {
    text: 7,
    value: 7,
    type: 'num'
  },
  {
    text: 8,
    value: 8,
    type: 'num'
  },
  {
    text: 9,
    value: 9,
    type: 'num'
  },
  {
    text: 'Del',
    value: 'del',
    type: 'specialOperator'
  },
  {
    text: 4,
    value: 4,
    type: 'num'
  },
  {
    text: 5,
    value: 5,
    type: 'num'
  },
  {
    text: 6,
    value: 6,
    type: 'num'
  },
  {
    text: "+",
    value: "+",
    type: 'operator'
  },
  {
    text: 1,
    value: 1,
    type: 'num'
  },
  {
    text: 2,
    value: 2,
    type: 'num'
  },
  {
    text: 3,
    value: 3,
    type: 'num'
  },
  {
    text: "-",
    value: "-",
    type: 'operator'
  },
  {
    text: ".",
    value: ".",
    type: 'period'
  },
  {
    text: 0,
    value: 0,
    type: 'num'
  },
  {
    text: "/",
    value: "/",
    type: 'operator'
  },
  {
    text: "x",
    value: "*",
    type: 'operator'
  },
  {
    text: "RESET",
    value: "RESET",
    type: 'specialOperator'
  },
  {
    text: "=",
    value: "=",
    type: 'calc'
  },
];
function createButtons() {
  const keyPad = document.querySelector("#keyPad");
  
  btnsArry.forEach(btn => {
    const markup = `
    <button class="keyPad__btn" data-keyPad="${btn.value}" data-type="${btn.type}">${btn.text}</button>
    `;
    keyPad.insertAdjacentHTML('beforeend', markup);
  })

 }
export { createButtons };
