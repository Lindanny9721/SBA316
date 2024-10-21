let navbar = document.getElementById("navbar");
var navbarLinks = [
    { text: "Home", href: "/" },
    { text: "Menu", href: "/menu" },
    { text: "Order", href: "/order" },
    { text: "Sign In", href: "/signin" }
];
for (let i = 0; i < navbarLinks.length; i++) {
    let link = document.createElement("a");
    link.href = navbarLinks[i].href;
    link.innerHTML = navbarLinks[i].text;
    if (navbarLinks[i].text === "Sign In") {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            toggleDropdown();
        });
    }
    navbar.appendChild(link);
}
navbar.style.width = window.innerWidth;
let signInDropdown = document.createElement("div");
signInDropdown.classList.add("dropdown-menu", "hidden");
signInDropdown.innerHTML = `
    <form id="signin">
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" required>
        <label for="password">Repeat Password:</label>
        <input type="password" id="passwordCheck" required>
        <button type="submit">Sign In</button>
    </form>
`;
navbar.appendChild(signInDropdown);
function toggleDropdown() {
    signInDropdown.classList.toggle("hidden");
}
document.getElementById('signin').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('passwordCheck').value;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(email)) {
        window.alert("Must be a valid email!");
        return;
    }
    if (password === "") {
        window.alert("Can't be empty!");
        return;
    } else if (password.toLowerCase() === "password") {
        window.alert("Password can't be password!");
        return;
    } else if (password !== passwordCheck) {
        window.alert("Password does not match!");
        return;
    }
    signInDropdown.classList.add("hidden");
});
var menu = [
    {name: "Miso Ramen", price: "10.99$"},
    {name: "Spicy Ramen", price: "11.99$"},
    {name: "Chicken Ramen", price: "10.99$"},
    {name: "Fish Ramen", price: "12.99$"},
    {name: "Chicken", price: "5.99$"},
    {name: "Fried Potatoes", price: "4.99$"},
    {name: "Miso Soup", price: "2.99$"},
    {name: "Californa Roll", price: "9.99$"},
    {name: "Eel Roll", price: "10.99$"},
    {name: "Salmon Roll", price: "12.99$"},
]
let list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++)
    {
        list[i].innerHTML = `${menu[i].name} <span class= "price">${menu[i].price}</span>`;
    }
let priceStyle = document.querySelector(".price");
priceStyle.style.fontWeight = "bold";