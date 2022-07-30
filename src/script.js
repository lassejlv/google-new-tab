function r(url) {
  window.location.href = url;
}

// Validerer når brugeren søger.

// function searchField() {
//   const searchField = document.getElementById("search-field").value;
//   const submit = document.getElementById("submit");

//   if (searchField.length == 0) {
//     submit.disabled = true;
//   } else {
//     submit.disabled = false;
//   }
// }

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  const searchQuery = document.getElementById("search-field").value;

  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistory.push(searchQuery);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
});

const history = document.getElementById("history");

const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

searchHistory.map((item) => {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.style.display = "none";
  li.innerHTML = item;
  history.appendChild(li);
});

const button = document.getElementById("search-history-button");

button.addEventListener("click", () => {
  const li = document.querySelectorAll(".list-item");

  li.forEach((item) => {
    item.style.display = "block";
    button.style.display = "none";
  });
});

// Dark Mode

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

if (localStorage.getItem("theme") == "dark") {
  darkButton.style = "display: block !important";
} else if (localStorage.getItem("theme") == "light") {
  lightButton.style = "display: block !important";
} else {
  darkButton.style = "display: block !important";
}

if (localStorage.getItem("theme") == "dark") {
  document.body.classList.remove("light-mode");
} else if (localStorage.getItem("theme") == "light") {
  document.body.classList.add("light-mode");
}

darkButton.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  window.location.reload();
});

lightButton.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  window.location.reload();
});
