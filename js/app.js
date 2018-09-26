//Uses the global window object to call a function which selects the first input field and autofocuses to the name input
window.onload = function() {
  document.getElementById("name").focus();
};

let jobTitle = document.getElementById("title")[5];

function otherSelected() {
  if (jobTitle) {
    let inputField = document.createElement("INPUT");
    document.body.insertBefore(inputField, jobTitle);
    inputField.setAttribute("type", "text");
  }
}
otherSelected();
