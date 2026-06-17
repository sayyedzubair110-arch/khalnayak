document.getElementById("shopBtn").addEventListener("click", function () {
    alert("Welcome to Rizwan Gaming Store!");
});

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});
