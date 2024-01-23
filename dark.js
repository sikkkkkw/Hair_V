document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const darkModeIcon = document.getElementById('darkModeIcon');
  const lightModeIcon = document.getElementById('lightModeIcon');

  if (document.documentElement.classList.contains("dark")) {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'inline-block';

  } else {
    darkModeIcon.style.display = 'inline-block';
    lightModeIcon.style.display = 'none ';
  }
});
