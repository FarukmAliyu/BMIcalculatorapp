function calculateBMI() {
    // Get the weight and height values from input fields
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Validate the input
    if (weight === '' || height === '') {
        alert("Please enter both weight and height.");
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display the result and category
    let resultText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += "You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    document.getElementById('result').textContent = resultText;
}
