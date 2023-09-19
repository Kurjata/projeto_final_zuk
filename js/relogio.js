$(document).ready(function() {
    function atualizarRelogio() {
        let dataAtual = new Date();
        let horas = dataAtual.getHours().toString().padStart(2, '0');
        let minutos = dataAtual.getMinutes().toString().padStart(2, '0');
        let segundos = dataAtual.getSeconds().toString().padStart(2, '0');
        $('#relogio').text(`${horas}:${minutos}:${segundos}`);
    }

    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
});