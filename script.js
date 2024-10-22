function changeTheme() {
  let darkTheme = document.querySelector("body");
  if (darkTheme.classList.contains("dark-theme")) {
    darkTheme.classList.remove("dark-theme");
  } else {
    darkTheme.classList.add("dark-theme");
  }
}

function connectWithUs() {
  let userName = prompt("What is your Name?").trim();
  alert(`${userName}!! Welcome to our Indian Cuisine World!😋`);
  let userEmail = prompt("What is your Email Address?");
  alert(`Thank you, ${userName}! We're excited to connect with you!☺️`);
  alert("We'll contact you soon!!😊");
  if (userName && userEmail) {
    const userQuest = prompt("Are you a food lover? (Yes/No)")
      .trim()
      .toLowerCase();
    let responseText = document.querySelector("h1");
    let body = document.querySelector("body");
    if (userQuest == "yes") {
      responseText.innerHTML = `That's fantastic! ${userName}, We believe you'll love exploring the flavors of India. Why not try some of the dishes below? They're sure to delight your taste buds!`;

      body.scrollIntoView({ behavior: "smooth" });
    } else if (userQuest == "no") {
      responseText.innerHTML = `No worries! ${userName}, Indian cuisine has something for everyone. Take a look at the dishes below—you might just find your new favorite!`;
      body.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Oops, Looks like there is a typo! please try again!");
    }
  } else {
    alert("Please provide both your name and email!");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let connectButton = document.querySelector(".connect-button");
connectButton.addEventListener("click", connectWithUs);
