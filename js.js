function calculateAge() {
  var birthDateInput = $("#birthDate").val();
  var birthDate = new Date(birthDateInput);
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
  }
  $("#ageResult").val(age);
}

function setCity() {
  var district = $("#District").val();
  var cityInput = $("#City");
  switch (district) {
      case "Kismayo":
          cityInput.val("Jubbada Hoose");
          break;
      case "Jawhar":
          cityInput.val("Shabelada Dhexe");
          break;
      case "Baladwayne":
          cityInput.val("Hiiraan");
          break;
      case "Moqdisho":
          cityInput.val("Banaadir");
          break;
      case "Marka":
          cityInput.val("Shabelada Hoose");
          break;
      case "Hodan":
          cityInput.val("Banaadir");
          break;
      default:
          cityInput.val("Somalia");
          break;
  }
}





  $(document).ready(function() {
   
    $("#totalMarks").on("keyup", function() {
        var grade = calculateGrade();
        $("#Grade").val(grade);
    });
});
function calculateGrade() {
  var grade = parseFloat($("#totalMarks").val());
  var result;

  switch (true) {
      case (grade >= 90):
          result = 'A';
          break;
      case (grade >= 80):
          result = 'B';
          break;
      case (grade >= 70):
          result = 'C';
          break;
      case (grade >= 60):
          result = 'D';
          break;
      default:
          result = 'F';
          break;
  }

  return result;
}
function submitForm() {

  var formData = {
      name: $("#name").val(),
      university: $("#university").val(),
      birthDate: $("#birthDate").val(),
      age: $("#ageResult").val(),
      district: $("#District").val(),
      city: $("#City").val(), 
      totalMarks: $("#totalMarks").val(),
      grade: calculateGrade()
  };

  var newRow = $("<tr>");
  $.each(formData, function(key, value) {
      newRow.append($("<td>").text(value));
  });
  $("#userTable tbody").append(newRow);
}
