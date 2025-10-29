  const form = document.getElementById('calcForm');
  const tabela = document.querySelector('#tabelaResultados tbody');
  const limpar = document.getElementById('limpar');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseInt(document.getElementById('tempo').value);

    tabela.innerHTML = "";

    let montante = capital;
    let jurosTotal = 0;

    for (let mes = 1; mes <= tempo; mes++) {
      const jurosMes = montante * taxa;
      montante += jurosMes;
      jurosTotal = montante - capital;

      const linha = `
        <tr>
          <td>${mes}</td>
          <td>${montante.toFixed(2)}</td>
          <td>${jurosTotal.toFixed(2)}</td>
        </tr>
      `;
      tabela.innerHTML += linha;
    }
  });
