function atualizarAparencia() {
  let agora = new Date();
  let hora = agora.getHours();
  let mensagem = document.getElementById('mensagem');

  if (hora >= 6 && hora < 12) {
      document.bgColor = "white";
      mensagem.style.color = "black";
      mensagem.innerHTML = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
      document.bgColor = "yellow";
      mensagem.style.color = "black";
      mensagem.innerHTML = "Boa tarde!";
  } else if (hora >= 18 && hora < 24) {
      document.bgColor = "darkblue";
      mensagem.style.color = "white";
      mensagem.innerHTML = "Boa noite!";
  } else {
      document.bgColor = "blue";
      mensagem.style.color = "white";
      mensagem.innerHTML = "Boa madrugada!";
  }
}

// Chama a função atualizarAparencia quando a página é carregada
window.onload = atualizarAparencia;