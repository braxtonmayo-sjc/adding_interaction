const Themebutton = document.getElementById("themeBtn");
const image = document.getElementById("gallery");

let darkMode = false;
Themebutton.addEventListener("click", () => {
  darkMode = !darkMode; // flip between true/false
  document.body.classList.toggle("dark", darkMode);
 
  if (darkMode) {
    Themebutton.textContent = "Switch to Light Mode";
  } else {
    Themebutton.textContent = "Switch to Dark Mode";
  }
});


gallery.addEventListener("mouseover", () => {
  gallery.src = "https://drive.google.com/thumbnail?id=14y1l77rJXRZVUwKf_7KaOyjcbi9UORaX";
 });
gallery.addEventListener("mouseout", () => {
  gallery.src = "https://drive.google.com/thumbnail?id=1AYfoW1yHMA01QZXRuPEXC_uHFq9JMa-X"
});
