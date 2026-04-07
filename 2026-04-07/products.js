const searchBar = document.querySelector('.search-bar');
const productCards = document.querySelectorAll('.product-card');
const categoryRadios = document.querySelectorAll('input[name="cat"]');
const stockRadios = document.querySelectorAll('input[name="stock"]');

function filterProducts() {
    const searchText = searchBar.value.toLowerCase();

    const selectedCategory = document.querySelector('input[name="cat"]:checked').id;
    const selectedStock = document.querySelector('input[name="stock"]:checked').id;

    productCards.forEach(card => {
        const category = card.querySelector('.card-category').textContent.toLowerCase();
        const badge = card.querySelector('.badge').textContent.toLowerCase();
        const name = card.querySelector('.card-name').textContent.toLowerCase();

        let matchesCategory = true;
        if (selectedCategory === "electronics") matchesCategory = category.includes('electronics');
        else if (selectedCategory === "clothing") matchesCategory = category.includes('clothing');
        else if (selectedCategory === "home") matchesCategory = category.includes('accessories');
        else if (selectedCategory === "books") matchesCategory = category.includes('books');

        let matchesStock = true;
        if (selectedStock === 'in-stock') matchesStock = badge.includes('in stock');
        else if (selectedStock === 'out-stock') matchesStock = badge.includes('out of stock');
        else if (selectedStock === 'low-stock') matchesStock = badge.includes('low stock');

        let matchesSearch = name.includes(searchText) || category.includes(searchText);

        card.style.display = (matchesCategory && matchesStock && matchesSearch) ? '' : 'none';
    });
}

categoryRadios.forEach(radio => radio.addEventListener('change',filterProducts));
stockRadios.forEach(radio => radio.addEventListener('change',filterProducts));
searchBar.addEventListener('input', filterProducts);

