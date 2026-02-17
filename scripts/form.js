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

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product =>{
    const select = document.querySelector("select");
    const option = document.createElement("option");
    option.innerHTML = product.name;
    option.setAttribute("value", product.id);
    select.appendChild(option);


});


const reviewCount = document.querySelector(".reviewCount");

let count = Number(window.localStorage.getItem("count-ls")) || 0;


if (count !== 0) {
	reviewCount.textContent = count;
} else {
	reviewCount.textContent = `This is your first visit. 🥳 Welcome!`;
}

count++;

localStorage.setItem("count-ls", count);


  