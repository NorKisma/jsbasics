
  // Function to calculate age
  function calculateAge() {
    var birthDateInput = $("#birthDate").val();
    var birthDate = new Date(birthDateInput);
    var today = new Date();
  
    var age = today.getFullYear() - birthDate.getFullYear();
  
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    document.getElementById("ageResult").value = age;
  }
  

  function setCity() {
    var district = document.getElementById("District").value;
    var cityInput = document.getElementById("City");

    if (district === "Kismayo") {
      cityInput.value = "Jubbada Hoose";
    } else if (district === "Jawhar") {
      cityInput.value = "Shabelada Dhexe";
    } else if (district === "Baladwayne") {
    cityInput.value = "Hiiraan";
  } 
     else if (district === "Moqdisho") {
    cityInput.value = "Banaadir ";
  }  else if (district === "Marka") {
    cityInput.value = "Shabelada Hoose";
  }  else if (district === "Hodan") {
    cityInput.value = "Banaadir";
  } 
    
    else {
      cityInput.value = 'Somalia';
    }
  }

  
  function calculateGrade() {
    var grade = parseFloat(document.getElementById("totalMarks").value);
     
    if (grade >= 90) {
      return 'A';
    } else if (grade >= 80) {
      return 'B';
    } 
    else if (grade >= 70) {
    return 'C';
  } 
  else if (grade >= 60) {
    return 'D';
  } else {
      return 'F';
    }
    
  }
  
  function submitForm() {
    var formData = {
        name: document.getElementById("name").value,
        university: document.getElementById("university").value,
        birthDate: document.getElementById("birthDate").value,
        age: document.getElementById("ageResult").value,
        district: document.getElementById("District").value,
        city: document.getElementById("City").value, 
        totalMarks: document.getElementById("totalMarks").value,
        grade: calculateGrade()
    };

  // Append form data to table
  var newRow = $("<tr>");
  $.each(formData, function(key, value) {
      newRow.append($("<td>").text(value));
  });
  $("#userTable tbody").append(newRow);
}

