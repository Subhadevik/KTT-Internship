const searchInput = document.querySelector('.customer-search-bar');
const customerCards = document.querySelectorAll('.cus-info-card');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();

    customerCards.forEach(card => {
        const name = card.querySelector('.customer-name').textContent.toLowerCase();
        const email = card.querySelector('.customer-email').textContent.toLowerCase();

        const matches = name.includes(searchText) || email.includes(searchText);
        card.style.display = matches ? '' : 'none';
    });
});

customerCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if(e.target.closest('.contact-btn')) return;

        card.classList.toggle('selected');
    });
});
