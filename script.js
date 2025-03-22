// File: script.js

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const unit = document.getElementById('unit').value;
    const result = document.getElementById('result');
    const tips = document.getElementById('tips');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Please enter valid positive numbers';
        result.className = 'result';
        tips.textContent = '';
        return;
    }

    let bmi;

    if (unit === 'metric') {
        bmi = (weight / (height * height)).toFixed(2);
    } else {
        bmi = ((weight / (height * height)) * 703).toFixed(2);
    }

    let status = '';
    let className = '';
    let healthTips = '';

    if (bmi < 18.5) {
        status = 'Underweight';
        className = 'underweight';
        healthTips = 'Consider eating nutrient-rich foods and increasing calorie intake. Consult a dietitian if needed.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
        className = 'normal';
        healthTips = 'Great job! Maintain a balanced diet and regular physical activity.';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
        className = 'overweight';
        healthTips = 'Focus on a balanced diet with more vegetables and fruits. Aim for at least 30 minutes of daily exercise.';
    } else {
        status = 'Obese';
        className = 'obese';
        healthTips = 'It is recommended to follow a structured weight loss plan. Consider consulting a healthcare provider.';
    }

    result.textContent = `Your BMI is ${bmi} (${status})`;
    result.className = `result ${className}`;
    tips.textContent = healthTips;
}

function clearFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = 'result';
    document.getElementById('tips').textContent = '';
}
