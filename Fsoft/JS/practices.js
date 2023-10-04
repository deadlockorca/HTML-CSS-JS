// Product data
const products = [];

// Add new product
function addNewProduct() {
  const nameInput = document.querySelector('#name');
  const descriptionInput = document.querySelector('#description');
  const amountInput = document.querySelector('#amount');
  const dateInput = document.querySelector('#date');

  const name = nameInput.value;
  const description = descriptionInput.value;
  const amount = parseInt(amountInput.value);
  const date = dateInput.value;

  const newProduct = {
    name: name,
    description: description,
    amount: amount,
    date: date
  };

  products.push(newProduct);

  // Reset input fields
  nameInput.value = '';
  descriptionInput.value = '';
  amountInput.value = '';
  dateInput.value = '';

  // Redirect to User Information page
  window.location.href = 'user_information.html';
}

// Confirm add new product
const addButton = document.querySelector('#add-new');

addButton.addEventListener('click', () => {
  const confirmAdd = confirm('Are you sure you want to add a new product?');
  if (confirmAdd) {
    addNewProduct();
  }
});