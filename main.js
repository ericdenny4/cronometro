const tempo = document.querySelectorAll(".timer");
function startTimer(duration, display) {
    var tempo = duration;
    var minutes, seconds;

    var intervalId = setInterval(function () {
        minutes = parseInt(tempo / 60, 10);
        seconds = parseInt(tempo % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--tempo < 0) {
            clearInterval(intervalId); // Parar o contador quando chegar a zero
            document.body.style.backgroundColor = "red"; // Alterar a cor de fundo para vermelho
            display.style.color = "black";
            
        }
    }, 1000);
}

window.onload = function () {
    var duration = 60 * 0.2; // Converter para segundos
    var display = document.querySelector('.timer'); // Selecionando o elemento para exibir o timer
    startTimer(duration, display); // Iniciando o timer
};