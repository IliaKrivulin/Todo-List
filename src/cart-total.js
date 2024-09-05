//Задание2
let price = 0;
calculate(22000, 9, 'СКИДКА15');

function calculate(amount, products, promo = null) { 
    //  console.log(amount, products, promo);
    let basketAmount = amount;

            // промокод равен 'ДАРИМ300'
  if (promo === 'ДАРИМ300' && basketAmount > 300) {
   basketAmount -= 300;
//    console.log('basket -300', basketAmount);
} else  if (promo === 'ДАРИМ300' && basketAmount <= 300) {
   basketAmount = 0;
//    console.log('basket < 300, = 0', basketAmount);
}
            // товаров в корзине ≥10 
    if (products >= 10) {
        let discontFive = basketAmount * 5 / 100;
       basketAmount -= discontFive;
    //    console.log('basket -5%', basketAmount);
    } 

            // сумма, превышающая 50 000, -20%
    if (basketAmount >= 50000) {
       let discountTwentyDifference = (basketAmount - 50000) * 20 / 100;
      basketAmount -= discountTwentyDifference;
    //   console.log('basket -20%', basketAmount);
    } 

            // промокод равен 'СКИДКА15', если сумма ≥20 000
    if (basketAmount >= 20000 && promo === 'СКИДКА15') {
        let discontFifteen = basketAmount * 15 / 100;
       basketAmount -= discontFifteen;
    //    console.log('basket -15%', basketAmount);
    }

    // console.log(basketAmount);
    return basketAmount;
} // end function

console.log('Cтоимость корзины: ', price);

export default calculate;