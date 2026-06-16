const year = new Date().getFullYear();

document.title = `Santa Monica Robotics Summer Camp ${year}`;

const footer = document.querySelector(".footer");
if (footer) {
  const line = document.createElement("p");
  line.textContent = `${year} season`;
  footer.appendChild(line);
}
