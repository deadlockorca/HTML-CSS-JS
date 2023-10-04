const products = [
    {
      name: 'Product 1',
      description: 'Description for product 1',
      amount: 100,
      date: '2021-01-01'
    },
    {
      name: 'Product 2',
      description: 'Description for product 2',
      amount: 200,
      date: '2021-02-01' 
    },
    {
      name: 'Product 3',
      description: 'Description for product 3',
      amount: 300,
      date: '2021-03-01'
    },
    {
      name: 'Product 4', 
      description: 'Description for product 4',
      amount: 150,
      date: '2021-04-01'
    },
    {
      name: 'Product 5',
      description: 'Description for product 5',
      amount: 120,
      date: '2021-05-01'
    },
    {
      name: 'Product 6',
      description: 'Description for product 6',
      amount: 80,
      date: '2021-06-01'
    },
    {
      name: 'Product 7', 
      description: 'Description for product 7',
      amount: 90,
      date: '2021-07-01'
    },
    {
      name: 'Product 8',
      description: 'Description for product 8',
      amount: 220,
      date: '2021-08-01'
    },
    {
      name: 'Product 9',
      description: 'Description for product 9',
      amount: 110,
      date: '2021-09-01'
    },
    {
      name: 'Product 10',
      description: 'Description for product 10',
      amount: 140,
      date: '2021-10-01'
    }
  ];
  
  function displayProducts() {
  
    const tableBody = document.querySelector('#products tbody');
  
    products.forEach(product => {
      const row = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = product.name;
      row.appendChild(nameCell);
  
      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = product.description;
      row.appendChild(descriptionCell);
  
      const amountCell = document.createElement('td');
      amountCell.textContent = product.amount;
      row.appendChild(amountCell);
  
      const dateCell = document.createElement('td');
      dateCell.textContent = product.date;
      row.appendChild(dateCell);
  
      tableBody.appendChild(row);
    });
  
  }
  
  displayProducts();
  
  const addButton = document.querySelector('#add-new');
  
  addButton.addEventListener('click', () => {
    const confirmAdd = confirm('Are you sure you want to add a new product?');
    if(confirmAdd) {}
  });
  
  const sortButton = document.querySelector('#sort');
  
  sortButton.addEventListener('click', () => {
  
    products.sort((a, b) => b.amount - a.amount);

    const tableBody = document.querySelector('#products tbody');
    tableBody.innerHTML = '';
  
    displayProducts();
  
  });