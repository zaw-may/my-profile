document.getElementById("requestCV").addEventListener("click", function () {    
  
  var email = "mailto:zawmay.data.analyst@gmail.com" +
  "?subject=Requesting%20Updated%20CV" +
  "&body=" + encodeURIComponent("Hello Zaw,\n\n I'm interested in your skills and experiences. Please provide me your updated CV with more information.\n\nThank you!\n\nBest Regards,");
  
  window.location.href = email;
});