const 
    peso = window.prompt(`Digite seu peso:`);
    altura = window.prompt(`Digite sua altura`);
    imc = peso / altura ** 2;

if(imc < 18.5) {
    console.log(`IMC: ${imc}) -- Abaixo do peso`);

}else if(imc > 18.5 && imc < 24.9) {
    window.alert(`IMC: ${imc}) -- Peso normal`);

}else if(imc >= 25.0 && imc < 30.0) {
    window.alert(`IMC: ${imc}) -- Sobrepeso`);

}else if(imc >=30.0 && imc < 35.0) {
    window.alert(`IMC ${imc}) -- Obesidade grau I`);

}else if(imc >=35 && imc < 40) {
    window.alert(`iMC ${imc}) -- Obesidade grau II`);

}else {
    window.alert(`IMC ${imc} -- Obesidade grau III`)`;`
}
