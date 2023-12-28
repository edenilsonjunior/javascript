function atualizarRelogio() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    
    // Formatar a hora e o minuto para exibição com dois dígitos
    const horaFormatada = hora.toString().padStart(2, '0');
    const minutoFormatado = minuto.toString().padStart(2, '0');
    
    const relogio = document.getElementById('relogio');
    relogio.textContent = horaFormatada + ':' + minutoFormatado;
}


setInterval(atualizarRelogio, 1000);

atualizarRelogio();