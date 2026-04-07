    const searchInput = document.querySelector('.order-search-bar');
    const filterSelect = document.querySelector('.order-filter');
    const tablerows = document.querySelectorAll('.order-table-body tr');
    const noResultsRow = document.querySelector('.no-results');

    function filterTable() {
        const searchText = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value.toLowerCase();
        let visibleCount = 0;

        const allrows = document.querySelectorAll('.order-table-body tr:not(.no-results)');

        allrows.forEach(row => {
            if(row.classList.contains('no-results')) return;

            const rowText = row.textContent.toLowerCase();
            const statusCell = row.querySelector('.ord-status');
            const status = statusCell ? statusCell.textContent.toLowerCase().trim() : '';

            const matchesSearch = rowText.includes(searchText);
            const matchesFilter = filterValue === '' || status.includes(filterValue);

            if(matchesSearch && matchesFilter) {
                row.style.display = '';
                visibleCount++;
            } else {
                row.style.display = 'none';
            }
        });

        noResultsRow.style.display = visibleCount === 0 ? '' : 'none';
    }

    searchInput.addEventListener('input',filterTable);
    filterSelect.addEventListener('change', filterTable);