const credits = 23580;
const price = 3000;
let numberOfTv = prompt('Яку кількість телевізорів ви бажаєте купити?');
let totalPrice = numberOfTv * price;

if (totalPrice) {
    alert(`Сума за дану кількість товару, становить: ${totalPrice} кредитів.`);
  
    if (totalPrice <= credits) {
      alert(`Ви купили ${numberOfTv} телевізорів, на рахунку залишилось: ${credits - totalPrice} кредитів.`);
    } else {
      alert(`Недостатньо коштів на рахунку.`);
    }
  } else {
    alert(`Операція скасована`);
  }