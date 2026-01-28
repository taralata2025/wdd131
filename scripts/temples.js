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
copyright.classList.add("copyr");
footer.appendChild(copyright);
footer.appendChild(lastup);

menu.addEventListener("click", () =>{
    navigation.classList.toggle("open");
    menu.classList.toggle("open");

})