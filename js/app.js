// Selects by id name, and uses the Jquery method FOCUS
$("#name").focus();

//Job Role
jobRole = () => {
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
};
jobRole();

tShirtInfo = () => {
  //listens for changes in the s-shirt design field
  $("#design").on("change", () => {
    //assigns the value to a variable
    let tShirtValue = $("#design").val();
    console.log(typeof tShirtValue);
    let color = $("#color")[0];
    for (let i = 0; i <= color.length; i++) {
      console.log(color[i]);
    }
    //If value is equal to js puns, do this
    if (tShirtValue === "js puns") {
    }
  });
};
tShirtInfo();
