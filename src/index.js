// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
}

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  let unitPrice = parseFloat(price.innerHTML);
  let quantityInput = product.querySelector(".quantity input");
  let quantity = parseFloat(quantityInput.value);
  let subtotal = product.querySelector(".subtotal span");
  const subTotalValue = unitPrice * quantity
  subtotal.innerHTML = subTotalValue
  return subTotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 1
   const singleProduct = document.querySelector('.product');
   updateSubtotal(singleProduct);

  // ITERATION 2
  let totalSum = 0
  const productList = document.getElementsByClassName('product');
  for (let i = 0; i <productList.length; i++) {
    totalSum += updateSubtotal(productList[i]) 
  }

  // ITERATION 3
  let total=document.getElementById("total-value")

   overallTotal=total.querySelector('span')
   overallTotal.innerHTML=totalSum
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
