// Daily currency rate
const USD = 5.67
const EUR = 6.12
const GBP = 7.37

// Getting elements from document
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulating the input to recieve only numbers
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Getting submit event from form
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Function to convert the currency
function convertCurrency(amount, price, symbol){
    try {
        
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = formatCurrencyBRL(amount * price)
        result.textContent = total
        
        footer.classList.add("show-result")
        console.log(description.innerText)
        
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Error at conversion, try again latter")
    }
}

// Function to format the currency in Brazilian Real
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}
