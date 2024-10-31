document.addEventListener('DOMContentLoaded', function() {
    const cart = document.querySelector('#cart-items');

    function addToCart(event) {
        const product = event.target.closest('.product');
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');

        const cartItem = document.createElement('li');
        cartItem.className = "list-group-item";
        cartItem.textContent = `${name} - ${price} грн.`;
        cart.appendChild(cartItem);
    }

    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => button.addEventListener('click', addToCart));

    $('.cart-btn').click(function() {
        $('#cartModal').modal('show');
    });
});
