document.getElementById('calculateBtn').addEventListener('click', function() {
    // Retrieve input values
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    // Validate input values
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
      alert('Please enter valid values for age, height, and weight.');
      return;
    }
  
    // Calculate BMI
    var bmi = weight / (height * height);
  
    // BMI Categories
    var category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 24.9 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    // Result for BMI here
    var result = 'Your BMI: ' + bmi.toFixed(2) + ' - ' + category;
    document.getElementById('result').textContent = result;
  });
  