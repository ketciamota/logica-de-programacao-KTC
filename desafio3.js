function converteTemperatura(){
    
    const temperaturaAtual= parseFloatexerci
    
    const celsiusParaFahrenheit = (temperatura * 9/5) + 32;
    const celsiusParaKelvin = temperatura - 273.15;
    
    const fahrenheitParaCelsius = (temperatura - 32) * 5/9;
    const fahrenheitParaKelvin = (temperatura + 459.67) * 5/9;
    
    const kelvinParaCelsius = temperatura + 273.15;
    const kelvinParaFarenheit = (temperatura - 273.15) * 9/5 + 32;
    
    if (escala.toLocaleLowerCase(celsius) == conversao.toLocaleLowerCase(fahrenheit)) {
        window.alert(`A temperatura correta é: ${celsiusParaFahrenheit}ºF`)
    } else if (escala.toLocaleLowerCase(celsius) == conversao.toLocaleLowerCase(kelvin)) {
        window.alert(`A temperatura correta é: ${celsiusParaKelvin}ºK`)
    } else if (escala.toLocaleLowerCase(fahrenheit) == conversao.toLocaleLowerCase(celsius)){
        window.alert(`A temperatura correta é: ${fahrenheitParaCelsius}ºC`)
    } else if (escala.toLocaleLowerCase(fahrenheit) == conversao.toLocaleLowerCase(kelvin)){
        window.alert(`A temperatura correta é: ${fahrenheitParaKelvin}ºK`)
    } else if (escala.toLocaleLowerCase(kelvin) == conversao.toLocaleLowerCase(celsius)){
        window.alert(`A temperatura correta é: ${kelvinParaCelsius}ºC`)
    } else {
        window.alert(`A temperatura correta é: ${kelvinParaFarenheit}ºF`)
    }
    
}
