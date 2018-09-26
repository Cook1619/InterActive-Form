// Selects by id name, and uses the Jquery method FOCUS
$("#name").focus();

//Job Role
function jobRole() {
  //hide text area
  let textArea = $("#other-job-role").hide();
  //listens for changes on this element
  $("#title").on("change", () => {
    //saving the value of the targeted element to a variable
    let roleValue = $("#title").val();
    //comparing the variable to the condition 'other'
    if (roleValue === "other") {
      //If True show the textarea
      textArea.show();
    } else {
      //if false hide the textarea
      textArea.hide();
    }
  });
}
jobRole();
