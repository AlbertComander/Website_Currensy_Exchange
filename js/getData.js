document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/RUB`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRates = document.getElementById('exchange-rates');
            const topCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];
            topCurrencies.forEach((currency, index) => {
                const rate = data.rates[currency];
                const row = document.createElement('tr');
                const currencyCell = document.createElement('td');
                const rateCell = document.createElement('td');

                currencyCell.textContent = currency;
                rateCell.textContent = (1 / rate).toFixed(2);

                row.appendChild(currencyCell);
                row.appendChild(rateCell);
                if (index % 2 === 0) {
                    row.classList.add('even-row');
                } else {
                    row.classList.add('odd-row');
                }
                exchangeRates.appendChild(row);
            });
        });

    const converterForm = document.getElementById('converter-form');
    converterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;

        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                let rate;
                rate = data.rates[toCurrency];
                const convertedAmount = amount * rate;
                document.getElementById('conversion-result').textContent = 
                    `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    });
});
