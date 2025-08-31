// 🎮 Part 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Button was clicked!";
});

// 🎮 Part 2: Interactive Elements
// Light/Dark Mode
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  document.getElementById("counterValue").textContent = counter;
});

// 📋✅ Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from submitting

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    this.reset();
  } else {
    document.getElementById("formSuccess").textContent = "";
  }
});
