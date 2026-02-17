const navigation = document.querySelector(".navigation");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");
const copyright = document.createElement("P");
const lastup = document.createElement("p");
const today = new Date();
const year = today.getFullYear();
lastup.innerText = `Last Modification ${document.lastModified}`
copyright.innerText = `\u00A9 ${year} 🌹 Tarilate Ginah Jones 🌹 Nigeria`
lastup.classList.add("highlight");
copyright.classList.add("foot-p");
footer.appendChild(copyright);
footer.appendChild(lastup);

menu.addEventListener("click", () =>{
    navigation.classList.toggle("open");
    menu.classList.toggle("open");

})


document.addEventListener("DOMContentLoaded", () => {
    const userPreferences = {
        theme: "light",
        welcomeMessage: "Welcome to Constructaora"
    };

    const heroImages = [
        "./images/hero2.webp",
        "./images/hero7.webp",
        "./images/hero4.webp"
    ];

    if (localStorage.getItem("visitedBefore")) {
        const username = localStorage.getItem("username") || "Guest";
        alert(`Welcome back, ${username}!`);
    } else {
        const name = prompt("Welcome! What's your name?");
        if (name) {
            localStorage.setItem("username", name);
            alert(`Nice to meet you, ${name}!`);
        }
        localStorage.setItem("visitedBefore", true);
    }

    const heroImgElement = document.querySelector(".hero img");
    let currentHeroIndex = 0;

    heroImgElement.addEventListener("click", () => {
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        heroImgElement.src = heroImages[currentHeroIndex];
        console.log(`Hero image changed to: ${heroImages[currentHeroIndex]}`);
    });

    heroImages.forEach((img, index) => {
        console.log(`Image ${index + 1}: ${img}`);
    });
});