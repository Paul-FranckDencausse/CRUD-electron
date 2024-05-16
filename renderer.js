document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('vinNom').value;
    const quantite = parseInt(document.getElementById('vinQuantite').value, 10);
    addStock(nom, quantite);
    document.getElementById('vinNom').value = '';
    document.getElementById('vinQuantite').value = '';
});

let stocks = [];

function addStock(nom, quantite) {
    stocks.push({ nom, quantite });
    renderStocks();
}

function deleteStock(index) {
    stocks.splice(index, 1);
    renderStocks();
}

function renderStocks() {
    const stocksTableBody = document.getElementById('stocksTable').getElementsByTagName('tbody')[0];
    stocksTableBody.innerHTML = '';
    stocks.forEach((stock, index) => {
        const row = stocksTableBody.insertRow();
        row.insertCell(0).textContent = stock.nom;
        row.insertCell(1).textContent = stock.quantite;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.onclick = function() { deleteStock(index); };
        row.insertCell(2).appendChild(deleteButton);
    });
}
