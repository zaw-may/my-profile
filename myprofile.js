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