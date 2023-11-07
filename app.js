let tables = document.querySelectorAll('.table-to-card');

tables.forEach(function (table) {
    // Create a new element to hold the cards
    let cards = document.createElement('div');
    cards.className = 'cards '
                       + 'table-to-card-converted '
                       + 'row '
                       + 'd-lg-none ';

    // Get the table headings and rows
    let headings = table.querySelectorAll('thead th');
    let rows = table.querySelectorAll('tbody tr');

    // Loop through each row
    rows.forEach(function (row) {
        // Create a new element to hold the individual card
        let cardContainer = document.createElement('div');
        cardContainer.className = 'card-container col-md-6 col-lg-4';

        // Create a new card and card body
        let card = document.createElement('div');
        card.className = 'card shadow mb-3';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Loop through each table cell in the row
        let cells = row.querySelectorAll('td, th');
        cells.forEach(function (cell, index) {
            if (cell.innerHTML.length == 0) return;

            if (index == 0) {
                // Create a new card text element to hold the first td cell content
                let cardTitle = document.createElement('h5');
                cardTitle.className = 'card-header';
                cardTitle.innerHTML = cell.innerHTML;
                card.appendChild(cardTitle);
                return;
            }

            // Create a new card body element to hold the cell content
            let cardText = document.createElement('p');
            cardText.className = 'card-text';

            // Add the cell content to the card body
            let cellContent = '<strong>' + headings[index].textContent + '</strong>: ' + cell.innerHTML;
            cardText.innerHTML = cellContent;

            // Add the card text to the card body
            cardBody.appendChild(cardText);
        });

        // build up the card
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
        cards.appendChild(cardContainer);
    });

    // Add the cards to the table parent
    table.parentNode.appendChild(cards, table);

    // Show table when screen size is lg or larger
    table.className = table.className + ' d-lg-block';
});