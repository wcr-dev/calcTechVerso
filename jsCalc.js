function calculateAverage() {
    let grade1 = parseFloat(document.getElementById('grade1').value.replace(',', '.'));
    let grade2 = parseFloat(document.getElementById('grade2').value.replace(',', '.'));

    const average = (grade1 * 4 + grade2 * 6) / 10;

    const resultElement = document.getElementById('result');

    if (!isNaN(average)) {
        if (average >= 5) {
            resultElement.innerHTML = `Sua média é ${average.toFixed(2)}. Parabéns, você está Aprovado!`;
        } else {
            resultElement.innerHTML = `Sua média é ${average.toFixed(2)}. Infelizmente, você não foi aprovado. Fique atento aos anulamentos de questões e lembre-se que ainda tem o Exame.`;
        }
    } else {
        resultElement.innerHTML = "Por favor, insira valores válidos.";
    }
}
