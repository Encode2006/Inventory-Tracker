document.addEventListener("DOMContentLoaded", (event) => {
    class CreateInventory {
        constructor(name, quantity, description, price, supplierInformation, category) {
            this._name = name;
            this._quantity = quantity;
            this._description = description;
            this._price = price;
            this._supplierInformation = supplierInformation;
            this._category = category;
        }
    
        addProduct() {
            const tableBody = document.getElementById('table-body');
            const tr = document.createElement('tr');
            
    
            const nameTd = document.createElement('td');
            nameTd.textContent = this._name;
            const quantityTd = document.createElement('td');
            quantityTd.textContent = this._quantity;
            const descriptionTd = document.createElement('td');
            descriptionTd.textContent = this._description;
            const priceTd = document.createElement('td');
            priceTd.textContent = this._price;
            const supplierInfoTd = document.createElement('td');
            supplierInfoTd.textContent = this._supplierInformation;
            const categoryTd = document.createElement('td');
            categoryTd.textContent = this._category;

            const deleteTd = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                tableBody.removeChild(tr);
            });

            deleteTd.appendChild(deleteButton);
            

            tr.appendChild(nameTd);
            tr.appendChild(quantityTd);
            tr.appendChild(descriptionTd);
            tr.appendChild(priceTd);
            tr.appendChild(supplierInfoTd);
            tr.appendChild(categoryTd);
            tr.appendChild(deleteTd);

            tableBody.appendChild(tr);
        }
    
        updateQuantities(productName, newQuantity) {
            const product = this._products.find(p => p.name === productName);
            if (product) {
                product.quantity = newQuantity;
                console.log('Updated quantity');
            } else {
                console.log('Product not found');
            }
        }
    
          }
    
    const addProductBtn = document.getElementById('addBtn');
    addProductBtn.addEventListener("click", (e) => {
        const name = document.getElementById('name').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const supplierInformation = document.getElementById('supplier-info').value;
        const category = document.getElementById('category').value;
    
        const newProduct = new CreateInventory(name, quantity, description, price, supplierInformation, category);
        newProduct.addProduct();

        document.getElementById('name').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
        document.getElementById('supplier-info').value = '';
        document.getElementById('category').value = '';

        
    });


})