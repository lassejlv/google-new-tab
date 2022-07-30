function r(url) {
  window.location.href = url;
}

// Validerer når brugeren søger.

function searchField() {
  const searchField = document.getElementById("search-field").value;
  const submit = document.getElementById("submit");

  if (searchField.length == 0) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

// Dark Mode

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

if (localStorage.getItem("theme") == "dark") {
  darkButton.style = "display: block !important";
} else if (localStorage.getItem("theme") == "light") {
  lightButton.style = "display: block !important";
}
