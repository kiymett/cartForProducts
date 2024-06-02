const products = document.querySelector(".products")

products.addEventListener("click", (e) => {
    // console.log(e.target)
    if (e.target.classList.contains("fa-plus")) {
        let quantity = Number(document.getElementById("quantity").innerText) + 1
        document.getElementById("quantity").innerText = quantity
        calculateProductPrice(e.target)

    } else if (e.target.classList.contains("fa-trash-can")) {
        document.getElementById("quantity").innerText = 1
        calculateProductPrice(e.target)
    }
})


const calculateProductPrice = (btn) => {

    const unitPrice = 31.99
    const quantity = btn.closest(".buttons-div").querySelector("#quantity").textContent
    console.log(quantity)

    const lineThroughPrice = btn.closest(".product-info").querySelector("#line-through-price").textContent
    // console.log(lineThroughPrice)

    let newPrice = unitPrice * quantity
    let newThroughPrice = unitPrice * quantity - quantity

    // determine shipping price and adjust style
    let shippingPrice = 4.99
    if (newThroughPrice > 40) {
        // shippingPrice set 0
        shippingPrice = 0
        // make color green
        document.querySelector("#shipping").classList.add('green');
    }
    document.getElementById("shipping").textContent = shippingPrice

    // adjust bar according to the price
    if (newThroughPrice > 100) {
        document.querySelector(".progress-bar2").classList.add('shipping-bar')
        document.querySelector(".progress-bar3").classList.remove('gift-bar')
        document.querySelector(".no-product").classList.remove('no-product')
        document.querySelector(".total-info .text-div span").classList.add('green');
    } else if (newThroughPrice > 40) {
        document.querySelector(".progress-bar1").classList.add('default-bar')
        document.querySelector(".progress-bar2").classList.remove('shipping-bar')
        document.querySelector(".total-info .text-div span").classList.add('green');
    } else {
        document.querySelector(".progress-bar1").classList.remove('default-bar')
        document.querySelector(".progress-bar3").classList.add('gift-bar')
        document.querySelector(".product.gift").classList.add('no-product')
        document.querySelector("#shipping").classList.remove('green');

    }



    document.getElementById("discounted-price").textContent = newPrice.toFixed(2)
    document.getElementById("line-through-price").textContent = newThroughPrice.toFixed(2)

    document.getElementById("discounted-total").textContent = newPrice.toFixed(2)
    document.getElementById("total").textContent = newThroughPrice.toFixed(2)
}
