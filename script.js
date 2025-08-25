function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "⚠️ Please enter both weight and height!";
    return;
  }

  // Convert height from cm to meters
  height = height / 100;

  // BMI formula
  let bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight 😕";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal ✅";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight ⚠️";
  } else {
    category = "Obese 🚨";
  }

  document.getElementById("result").innerHTML = 
    `Your BMI is <b>${bmi}</b> (${category})`;
}
