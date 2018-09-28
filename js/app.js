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
    } else if ($tShirtValue === "heart js") {
      $color
        .eq(0)
        .hide()
        .attr("selected", false);
      $color.eq(1).hide();
      $color.eq(2).hide();
      //If index equals 3,4,5 show them and add attr
      $color
        .eq(3)
        .show()
        .attr("selected", true);
      $color.eq(4).show();
      $color.eq(5).show();
    }
  });
};
tShirtInfo();

//selects the activities and listens for events
$(".activities").on("change", () => {
  //total is initialized
  let total = 0;
  //if input name all is checked add 200 to the total
  if ($("input[name='all']").is(":checked")) {
    total += 200;
    //if js-frameoework is checked disable 2 other events in the same time frame and add 100 to the total
  } else if ($("input[name='js-frameworks']").is(":checked")) {
    $("input[name='build-tools']")
      .prop("disabled", true)
      .parent()
      .css("display", "none");
    $("input[name='express']").prop("disabled", true);
    total += 100;
    console.log(total);
  } else if ($("input[name='js-libs']").is(":checked")) {
    $("input[name='node']").prop("disabled", true);
    $("input[name='npm']").prop("disabled", true);
    total += 100;
  } else if ($("input[name='express']").is(":checked")) {
    $("input[name='js-frameworks']").prop("disabled", true);
    $("input[name='build-tools']").prop("disabled", true);
    total += 100;
  } else if ($("input[name='node']").is(":checked")) {
    $("input[name='js-libs']").prop("disabled", true);
    $("input[name='npm']").prop("disabled", true);
    total += 100;
  } else if ($("input[name='build-tools']").is(":checked")) {
    $("input[name='express']").prop("disabled", true);
    $("input[name='js-frameworks']").prop("disabled", true);
    total += 100;
  } else if ($("input[name='npm']").is(":checked")) {
    $("input[name='node']").prop("disabled", true);
    $("input[name='js-libs']").prop("disabled", true);
    total += 100;
  } else {
    //catch all if not checked, don't disable the checkbox
    $("input[name='node']").prop("disabled", false);
    $("input[name='npm']").prop("disabled", false);
    $("input[name='express']").prop("disabled", false);
    $("input[name='js-libs']").prop("disabled", false);
    $("input[name='js-frameworks']").prop("disabled", false);
    $("input[name='build-tools']")
      .prop("disabled", false)
      .parent()
      .css("display", "inline-block");
  }
});
