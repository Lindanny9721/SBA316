let navbar = document.getElementById("navbar");
var navbarLinks = [
    {text: "Home", href: "/home"},
    {text: "Menu", href: "/menu"},
    {text: "Order", href: "/order"},
    {text: "Sign In", href: "/signin"}
];
console.log(navbarLinks.length);
for(let i = 0; i < navbarLinks.length; i++)
{
    console.log("test");
    let link = document.createElement("a");
    link.href = navbarLinks[i].href;
    link.innerHTML = navbarLinks[i].text;
    console.log(link);
    navbar.appendChild(link);
};