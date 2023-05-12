document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform authentication (replace with your own logic)
    if (username === "john" && password === "password123") {
      document.getElementById("message").textContent = "Login successful";
    } else {
      document.getElementById("message").textContent = "Invalid credentials";
    }
  });
  