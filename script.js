function converter() {
    const moeda = document.getElementById("moeda").value;
    const valor = document.getElementById("valor").value;
    const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${moeda}/dados/ultimos/1?formato=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cotacao = data[0].valor;
            const valorConvertido = valor * cotacao;

            const resultado = `$${valor} = ${valorConvertido.toFixed(2)} BRL`;
            document.getElementById("resultado").innerHTML = resultado;
        })
        .catch(error => {
            console.log(error);
        });
}

function inverter() {
    const moeda = document.getElementById("moeda").value;
    const valor = document.getElementById("valor").value;
    const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${moeda}/dados/ultimos/1?formato=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cotacao = data[0].valor;
            const valorConvertido = valor / cotacao;

            const resultado = `$${valor} BRL = $${valorConvertido.toFixed(2)}`;
            document.getElementById("resultado").innerHTML = resultado;
        })
        .catch(error => {
            console.log(error);
        });
}