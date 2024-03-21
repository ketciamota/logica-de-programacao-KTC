function calculeimc(peso, altura) {

    const imc = peso / altura ** 2;
    let mensagem;
    
    if(imc < 18.5) {
        console.log(`IMC: ${imc}) -- Abaixo do peso`);
    
    }else if(imc > 18.5 && imc < 24.9) {
        mensagem(`IMC: ${imc}) -- Peso normal`);
    
    }else if(imc >= 25.0 && imc < 30.0) {
        mensagem(`IMC: ${imc}) -- Sobrepeso`);
    
    }else if(imc >=30.0 && imc < 35.0) {
        mensagem(`IMC ${imc}) -- Obesidade grau I`);
    
    }else if(imc >=35 && imc < 40) {
        mensagem(`iMC ${imc}) -- Obesidade grau II`);
    
    }else {
        mensagem`IMC: ${imc.toFixed()} -- Obesidade grau III`)`;`
    }

    return mensagem;
}