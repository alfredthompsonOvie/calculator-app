
function calResult() {
  const keyPad = document.querySelector("#keyPad");
  const displayCal = document.querySelector(".displayCal");
  const calArry = [];
  keyPad.addEventListener("click", (e) => {
    // console.log("clicked");
    const target = e.target.closest('.keyPad__btn');
    if (!target) return;
    console.log(target.dataset.keypad);
    // operators + - * / = data-type='operator'
    // operands 0-9. data-type='num'
    // special operators reset, del data-type='specialOperator'
    

  })
 }
export { calResult };