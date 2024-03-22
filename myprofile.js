document.getElementById("requestCV").addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.open("POST", "/requestCV", true);
    request.send();
  });
  