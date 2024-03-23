document.getElementById("requestCV").addEventListener("click", function () {    
  
  var email = "mailto:zawmay.data.analyst@gmail.com" +
  "?subject=Requesting%20Updated%20CV" +
  "&body=Hello Zaw, " +
  "I'm interested in your skills and experiences. Please provide me your updated CV with more information. " +
  "Thank you. " +
  "Best Regards,";
  
  window.location.href = email;
});