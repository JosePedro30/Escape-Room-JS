export function init() {
    localStorage.setItem('Tempo', JSON.stringify(600));
}

export function começarTempo() {
    const minuto = localStorage.getItem('Tempo');
    let tempo = sessionStorage.getItem('tempoRestante') || minuto;

    const tempoInterval = document.getElementById('tempoInterval');
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    tempoInterval.innerHTML = `${minutos}:${segundos}`;

    if (tempo > 0) {
        tempo--;
    } else {
        tempo = 0;
    }

    sessionStorage.setItem('tempoRestante', tempo);
}

export function pararTempo() {
    clearInterval(tempoInterval);
    sessionStorage.removeItem('tempoRestante');
}