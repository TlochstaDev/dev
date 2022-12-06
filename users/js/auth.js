function login() {
  var username = document.getElementById("user-form").value;
  var password = document.getElementById("pass-form").value;
  
  if (username != "tlochsta" || "briley452" || "starkiller") {
      alert("Unable to find account, make sure username and password are correct and try again.");
  } else {
      if (password == "tlochstatest101" || "accessportal361briley" || "121410") {
        localStorage.setItem("loggedin", "true");
        localStorage.setItem("username", username);      
        localStorage.setItem("password", password);
        localStorage.setItem("pfp", "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg");
        
        var url_string = window.location.href; 
        var url = new URL(url_string);
        var redirecturl = url.searchParams.get("redirect");
        window.locaton.href = redirecturl;
      }
  }
}
