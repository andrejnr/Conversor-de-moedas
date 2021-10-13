function ConverterR() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.29;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Real é de R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterE() {
  var valorElementoE = document.getElementById("valor");
  var valor = valorElementoE.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmEuro = valorEmDolarNumerico * 6.2;
  console.log(valorEmEuro);

  var elementoValorConvertidoE = document.getElementById("valorConvertidoE");
  var valorConvertidoE = "O valor em euro é de (€) " + valorEmEuro;
  elementoValorConvertidoE.innerHTML = valorConvertidoE;
}
