const yearElement = document.querySelector("#currentyear");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;