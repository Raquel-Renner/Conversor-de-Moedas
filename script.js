function Converter() {
  var valorElemento = document.getElementById("valor");
  var valorDoInput = valorElemento.value;
  var valorEmDolarNum = parseFloat(valorDoInput);
  var valorEmRealNum = valorEmDolarNum * 5;

  var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
  var valorConvertido = "O resultado em Real é $" + valorEmRealNum;
  elementoValorConvertido.innerHTML = valorConvertido;

  //Bitcoin:
  var valorEmBitcoin = valorEmDolarNum * 0.000021;
  var elementoValorBitcoin = document.getElementById("valorConvertidoBitcoin");
  var valorConvertidoBitcoinResposta =
    "O resultado em Bitcoin é BTC " + valorEmBitcoin;
  elementoValorBitcoin.innerHTML = valorConvertidoBitcoinResposta;

  //Aqui ficam os logs do console:
  console.log("Você digitou " + valorEmDolarNum + " Dólares");
  console.log("O valor em Reais fica: " + valorEmRealNum);
}

function ConverteParaEuro() {
  var valueElementoEuro = document.getElementById("idConversorEuro").value;

  var elementoEuroFloat = parseFloat(valueElementoEuro);
  var valorConvEmEuro = elementoEuroFloat * 6.19;
  var resposta = "O valor convertido para Euro fica: " + valorConvEmEuro;

  var elementorespostaValorEuro = document.getElementById("respostaValorEuro");

  elementorespostaValorEuro.innerHTML = resposta;
}