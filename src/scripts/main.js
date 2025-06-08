AOS.init();

const dataEvento = new Date("Jun 10, 2025 18:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    const segundoEmMS = 1000;

    const dias = Math.floor(distanciaEvento / diaEmMS);
    const horas = Math.floor((distanciaEvento % diaEmMS) / horaEmMS);
    const minutos = Math.floor((distanciaEvento % horaEmMS) / minutoEmMS);
    const segundos = Math.floor((distanciaEvento % minutoEmMS) / segundoEmMS);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento expirado!";
    }

},1000);
