document.getElementById("requestCV").addEventListener("click", function () {    
  
  var email = "mailto:zawmay.data.analyst@gmail.com" +
  "?subject=Requesting%20Updated%20CV" +
  "&body=" + encodeURIComponent("Hello Zaw,\n\n I'm interested in your skills and experiences. Please provide me your updated CV with more information.\n\nThank you!\n\nBest Regards,");
  
  window.location.href = email;
});

document.getElementById("linkToPBIX").addEventListener("click", function () {    
  
  var email = "mailto:zawmay.data.analyst@gmail.com" +
  "?subject=Requesting%20Power%20BI%20Reports%20And%20Dashboards" +
  "&body=" + encodeURIComponent("Hello Zaw, \n\nI am reaching out to express my interest in exploring your Power BI Web Services. Could you kindly provide details on the visualization capabilities available through your Power BI Web Services? I eagerly await your response.\n\nThank you!\n\nBest Regards,");
  
  window.location.href = email;
});

function closeWarning () {
  document.getElementById("warningBox").style.display = "none";
}

document.getElementById("contactMe").addEventListener("click", function () {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var warningbox = document.getElementById("warningBox");

  if (name === '' || email === '' || subject === '' || message === '') {
    warningbox.style.display = "block";
  } else {
    var email = "mailto:zawmay.data.analyst@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Hello Zaw, \n\n" + message + "\n\nBest Regards,\n" + name);
  
    window.location.href = email;
  }
});