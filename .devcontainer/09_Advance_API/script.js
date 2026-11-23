const callApiBtn = document.querySelector("#callApiBtn");
const usernameInput = document.querySelector("#username");
const cardContainer = document.querySelector("#cardContainer");

callApiBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim() || "brijesh5517";
  const userURL = `https://api.github.com/users/${username}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", userURL, true);

  xhr.onreadystatechange = function () {
    // Wait until the request is DONE (readyState === 4)
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        renderUserCard(data);
      } else {
        cardContainer.innerHTML = `<p class="status error">User not found (Status: ${xhr.status})</p>`;
      }
    }
  };

  xhr.send();
});

function renderUserCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = user.avatar_url;
  img.alt = `${user.login}'s avatar`;

  const name = document.createElement("h2");
  name.textContent = user.name || user.login;

  const followers = document.createElement("p");
  followers.textContent = "Followers: ";

  const count = document.createElement("span");
  count.textContent = user.followers;
  followers.append(count);

  card.append(img, name, followers);
  cardContainer.replaceChildren(card);
}