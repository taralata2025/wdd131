
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


function calculateWindChill(temp, windSpeed, isMetric = true) {
  if (isMetric) {
    if (temp <= 10 && windSpeed > 4.8) {
      let windChill = 13.12 + 0.6215 * temp - 11.37 * windSpeed ** 0.16 + 0.3965 * temp * windSpeed ** 0.16;
      return windChill.toFixed(2) + " °C";
    } else {
      return "N/A";
    }
  } else {
    if (temp <= 50 && windSpeed > 3) {
      let windChill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
      return windChill.toFixed(2) + " °F";
    } else {
      return "N/A";
    }
  }
}