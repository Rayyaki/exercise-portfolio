const elemen = [
  "Web Designer",
  "Fullstack Developer",
  "Software Engineer",
  "Content Creator",
];
let count = 0;
let index = 0;
let currenteks = "";
let words = "";

(function runteks() {
  if (count == elemen.length) {
    count = 0;
  }

  currenteks = elemen[count];

  words = currenteks.slice(0, ++index);
  document.querySelector(".efek-ketik").textContent = words;

  if (words.length == currenteks.length) {
    count++;
    index = 0;
  }
  setTimeout(runteks, 500);
})();
