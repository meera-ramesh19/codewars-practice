// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// FUNDAMENTALS

function bmi(weight, height) {
  let percent = (weight / height ** 2).toFixed(2);

  let result =
    percent <= 18.5
      ? "Underweight"
      : percent <= 25.0
      ? "Normal"
      : percent <= 30.0
      ? "Overweight"
      : percent > 30
      ? "Obese"
      : "";
  return result;
}
