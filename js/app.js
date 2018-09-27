// Selects by id name, and uses the Jquery method FOCUS
$("#name").focus();
//Variables used for jobRole funciton
let $textArea = $("#other-job-role");
let $roleValue = $("#title");
//Job Role
jobRole = () => {
  //hide text area
  $textArea.hide();
  //listens for changes on this element
  $roleValue.on("change", () => {
    //saving the value of the targeted element to a variable
    let $roleValueOther = $("#title").val();
    //comparing the variable to the condition 'other'
    if ($roleValueOther === "other") {
      //If True show the textarea
      $textArea.show();
    } else {
      //if false hide the textarea
      $textArea.hide();
    }
  });
};
jobRole();

let $tShirt = $("#design");
let $color = $("#color option");
//tShirtInfo
tShirtInfo = () => {
  //listens for changes in the s-shirt design field
  $tShirt.on("change", () => {
    //assigns the value to a variable
    let $tShirtValue = $tShirt.val();
    //checks is the value is equal to js puns
    if ($tShirtValue === "js puns") {
      //If the value is js puns do this
      //If index match 0,1,2 show them, and add the attr
      $color
        .eq(0)
        .show()
        .attr("selected", true);
      $color.eq(1).show();
      $color.eq(2).show();
      //If index equals 3,4,5 hide them and add attr
      $color
        .eq(3)
        .hide()
        .attr("selected", false);
      $color.eq(4).hide();
      $color.eq(5).hide();
    } else {
      $color.hide();
    }
  });
};
tShirtInfo();
