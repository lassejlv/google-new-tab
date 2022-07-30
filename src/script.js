function r(url) {
  window.location.href = url;
}

// Dette laver et img tag med et billede, ved godt man kan gøre det nemere. Men bruger bare dette til at øve mig
const avatar = document.getElementById("avatar");
const avatar_url =
  "https://lh3.googleusercontent.com/ogw/AOh-ky2OnpiTfl_LeMwq2EhUBGWgRhgO-mK40ivrQvge1w=s32-c-mo";

avatar.innerHTML = `
<img
  src="${avatar_url}"
  alt="Avatar"
  class="avatar"
/>
`;

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
