function includeHTML() {
  var i, elmnt, file, xhttp;
  var z = document.getElementsByTagName("*");
  
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
  
    file = elmnt.getAttribute("w3-include-html");
    
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          
          if (this.status == 200 || this.status == 0) {
            elmnt.innerHTML = this.responseText;
          }
          
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
  
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }

      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}