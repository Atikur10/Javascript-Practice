document.getElementById("submit-button").addEventListener("click", function () {
  // Get the user email
  const userEmail = document.getElementById("user-input-field");
  const email = userEmail.value;

  // Get the user password
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;

  // Check if email and password are valid
  if (email === "badhon@gmail.com" && password === "badhon") {
    window.location.href = "calculate-money.html";
  } else {
    alert("invalid user");
  }

  // Reset the fields
  userEmail.value = "";
  userPassword.value = "";
});
