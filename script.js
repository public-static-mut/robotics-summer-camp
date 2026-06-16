const year = new Date().getFullYear();

document.title = `Samotech Summer Robotics ${year}`;

const footer = document.querySelector(".footer");
if (footer) {
  const line = document.createElement("p");
  line.textContent = `${year} summer planning`;
  footer.appendChild(line);
}
