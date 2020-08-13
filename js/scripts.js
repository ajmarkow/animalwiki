$(document).ready(function () {
  // const animal = $("input[type=radio][name=animal]:checked").val();
  // alert(animal);
  // if (animal === "Giraffe") {
  //   $('#giraffe').show();
  //   $('.hide').not('#giraffe').hide();
  // } else if (animal === "Elephant") {
  //   alert("You will now learn about the elephant");
  //   $('#elephant').show();
  //   $('.hide').not('#elephant').hide();
  // } else {
  //   $('#lion').show();
  //   $('.hide').not('#lion').hide();
  // }







  $('input[type=radio][name="animal"]').change(function () {
    const animal = $("input[type=radio][name=animal]:checked").val();
    if (animal === "Giraffe") {
      $('.giraffe').show();
      $('.elephant').hide();
      $('.lion').hide();
    } else if (animal === "Elephant") {
      $('.giraffe').hide();
      $('.elephant').show();
      $('.lion').hide();
    } else {
      $('.giraffe').hide();
      $('.elephant').hide();
      $('.lion').show();
      //$('.hide').not('.lion').hide();
    }
  });
});