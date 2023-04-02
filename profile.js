const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // check if the user exists in localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // redirect to the home page or do something else
    alert("Logged in successfully");
  } else {
    alert("Invalid username or password.");
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // add the user to localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({username, email, password});
  localStorage.setItem("users", JSON.stringify(users));
  
  // redirect to the home page or do something else
  alert("Registered successfully");
});

// validation
function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }
  
  // validate email format
  
  return true;
}

