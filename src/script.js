const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  const searchQuery = document.getElementById("search-field").value;

  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistory.push(searchQuery);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
});

const history = document.getElementById("history");

const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

searchHistory.map((item, index) => {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.style.display = "none";
  li.innerHTML = `<a href="https://google.com/search?q=${item}">${index} | <span style="color: var(--light)">${item}</span></a> <i  onclick="deleteItem()" id="delete-item" style="margin-left: 4px; color: var(--red); cursor: pointer;" class="fa-solid fa-trash fa-sm"></i>`;
  history.appendChild(li);
});

const button = document.getElementById("search-history-button");

button.addEventListener("click", () => {
  const li = document.querySelectorAll(".list-item");

  if (li.length == 0) {
    alert("No search history, search something first!");
  } else {
    li.forEach((item) => {
      item.style.display = "block";
      button.style.display = "none";
    });
  }
});

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
