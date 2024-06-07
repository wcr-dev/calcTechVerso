function calculateAverage() {
    let grade1 = parseFloat(document.getElementById('grade1').value.replace(',', '.'));
    let grade2 = parseFloat(document.getElementById('grade2').value.replace(',', '.'));

    const average = (grade1 * 4 + grade2 * 6) / 10;

    const resultElement = document.getElementById('result');

    if (!isNaN(average)) {
        if (average >= 5) {
            resultElement.innerHTML = `<span class="result-success">Sua média é <span class="bold-underline">${average.toFixed(2)}</span>. Parabéns, você está <br><span class="bold-underline">APROVADO!!!</span></span>`;
            launchConfetti();
        } else {
            resultElement.innerHTML = `<span class="result-failure">Sua média é <span class="bold-underline">${average.toFixed(2)}</span>. <br><br>Infelizmente, você não foi aprovado. <br><br>Fique atento aos anulamentos de questões e lembre-se que ainda tem o <span class="bold-underline">Exame</span>.</span>`;
        }
    } else {
        resultElement.innerHTML = `<span class="result-error">Por favor, insira valores válidos.</span>`;
    }
}


function calculateGrade() {
    let grade3 = parseFloat(document.getElementById('grade3').value.replace(',', '.'));        
    let grade4 = parseFloat(document.getElementById('grade4').value.replace(',', '.'));
    
    const resultElement = document.getElementById('resultGrade');    
    
    if (!isNaN(grade3)) {
        if (grade3 >= 5) {
            document.getElementById('grade3').value = '';
            alert("Com uma nota de " + grade3.toFixed(2) + " de Média, \nentre AVA e Prova Bimestral. \n\nVocê já estaria aprovado!!! \n\n\nPor favor insira um valor menor que 5,00");
            return;
        }
    } else {
        document.getElementById('grade3').value = '';
        alert("Por favor, insira valores válidos.");
    }

    const average = (grade3 + grade4) / 2;

    if (!isNaN(average)) {        
        if (average >= 5) {
            resultElement.innerHTML = `<span class="result-success">Sua média é <span class="bold-underline">${average.toFixed(2)}</span>. Parabéns, você está <br><span class="bold-underline">APROVADO!!!</span></span>`;
            launchConfetti();
        } else {
            resultElement.innerHTML = `<span class="result-failure">Sua média final é <span class="bold-underline">${average.toFixed(2)}</span>. <br><br>Infelizmente, você acabou ficando de <span class="bold-underline">DP</span>.</span>`;
        }
    } else {
        resultElement.innerHTML = `<span class="result-error">Por favor, insira valores válidos.</span>`;
    }
}


function launchConfetti() {
    const duration = 5 * 1000; // duração da animação em milissegundos
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // Since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
