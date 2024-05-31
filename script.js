document.getElementById('numEstudantes').addEventListener('change', function() {
    const numEstudantes = parseInt(this.value);
    const notasInputsDiv = document.getElementById('notasInputs');
    notasInputsDiv.innerHTML = '';

    for (let i = 0; i < numEstudantes; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `nota${i}`;
        input.name = `nota${i}`;
        input.placeholder = `Nota do estudante ${i + 1}`;
        input.min = 0;
        input.max = 100;
        input.required = true;
        notasInputsDiv.appendChild(input);
        notasInputsDiv.appendChild(document.createElement('br'));
    }
});

document.getElementById('notasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numEstudantes = parseInt(document.getElementById('numEstudantes').value);
    let somaNotas = 0;
    let maiorNota = -Infinity;
    let menorNota = Infinity;

    for (let i = 0; i < numEstudantes; i++) {
        const nota = parseFloat(document.getElementById(`nota${i}`).value);
        somaNotas += nota;
        if (nota > maiorNota) maiorNota = nota;
        if (nota < menorNota) menorNota = nota;
    }

    const media = somaNotas / numEstudantes;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Média da turma: ${media.toFixed(2)}</p>
                              <p>Maior nota: ${maiorNota}</p>
                              <p>Menor nota: ${menorNota}</p>`;
});