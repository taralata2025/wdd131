

const navigation = document.querySelector(".navigation");
const menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menu.classList.toggle("open");
});

const footer = document.querySelector("footer");
const today = new Date();
const year = today.getFullYear();
const lastup = document.createElement("p");
const copyright = document.createElement("p");

lastup.textContent = `Last Modification ${document.lastModified}`;
copyright.innerHTML = `&copy; ${year} 🌹 Tarilate Ginah Jones 🌹 Nigeria`;
lastup.classList.add("highlight");
copyright.classList.add("copyr");

footer.appendChild(copyright);
footer.appendChild(lastup);


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Belém Brazil Tempel",
    location: "Parque Verde Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
  },
  {
    templeName: "Los Angeles California Temple",
    location: "Los Angeles, California",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
  }
];

function parseDedicatedDate(dedicated) {
  const [year, month, day] = dedicated.split(",").map(part => part.trim());
  return new Date(`${month} ${day}, ${year}`);
}


function templeCard(data = temples) {
  const container = document.querySelector(".temples");
  container.innerHTML = ""; 

  data.forEach(temple => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}


function filterTemples(type) {
  let filtered = [];

  if (type === "old") {
    filtered = temples.filter(t => parseDedicatedDate(t.dedicated).getFullYear() < 1900);
  } else if (type === "new") {
    filtered = temples.filter(t => parseDedicatedDate(t.dedicated).getFullYear() > 2000);
  } else if (type === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (type === "small") {
    filtered = temples.filter(t => t.area < 10000);
  } else {
    filtered = temples; 
  }


  const heading = document.querySelector("main h2");
  heading.textContent = type === "all" || type === "home" ? "Home" : type.charAt(0).toUpperCase() + type.slice(1);

  templeCard(filtered);
}


document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.textContent.toLowerCase(); 
    filterTemples(filter === "home" ? "all" : filter);
  });
});


templeCard();