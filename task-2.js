const stock = 100;
const invoice = " ";
const message =
  invoice > stock
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";

console.log(message);
