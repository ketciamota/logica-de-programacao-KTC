# logica-de-programacao-KTC
Treinando a lógica de programação com JavaScrip
~~~js
console.log(`Os numeros das operações são ${numero1} é ${numero2}`);
console.log(`A soma dos numeros é ${numero1} + ${numero2}`);
console.log(`A subtração dos numeros é ${numero1} - ${numero2}`);
console.log(`A multiplicação dos numeros é ${numero1} * ${numero2}`);
console.log(`A divisão dos numeros é ${numero1} / ${numero2}`);
console.log(`O resto dos numeros é ${numero1} $ ${numero2}`)
~~~

Em cada uma das operações, temos um operador aritmético:







## operadores-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa variável
será **reatribuída** ao loongo do nosso código.
Em seguida, fazemos uma série reatribuições usando os operadores de atribuição.

~~~js
console.log(`Após atribuir somando o número 10: ${numero +=10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -=10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *=10}`);
console.log(`Reatribuindo e dividindo 10: ${numero /=10}`);
console.log(`Reatribuindo para o resto da divisão por 10:${numero}`);

console.log(`Incrementando o número em 1`: ${numero});
console.log(`Decrementando o número em 1`: ${numero});
console.log(`O número final é igual a ${numero}`);
~~~



Operadores de atribuição:

* `+=` -> atribuição com soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementado)
 Ex: `numero ++` (pós-incremento) ou `++ número` (pré-incremento)
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decrementado)



## operadores-comparação

Neste arquivo conhecemos os operadores de comparação e a estrutura lógic de decisão
 **if-else**.

 ~~~js
 if  (condicao) {
    console.log(`verdadeiro`);
 } else {
    console.log(`falso`);
 }
 ~~~

 ## desafio.js

 escreva um codigo em js que resolve o problema do livro **logica de programação I**
 pagina 20, em que temos que obteer as 3 notas de um aluno, calcular a média e exibir
 se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas, vc pode definí-las com variáveis.

 Você precisará utilizar uma estrutura de decisão composta como a seguir:

 ~~~js:
if (condicao1) {
 
} else if (condicao2) {
  
  
} else {
    
}


### desafio.js

Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.

Orientações:

Utilize o método prompt() do objeto window para realizar a leitura dos dados de entrada.
Utilize a fórmula IMC = peso / altura² para calcular o IMC.
Utilize a estrutura if-else para classificar o IMC de acordo com a tabela da OMS:
IMC	Indicação
Abaixo de 18,5	Abaixo do peso
18,5 - 24,9	Peso normal
25,0 - 29,9	Sobrepeso
30,0 - 34,9	Obesidade grau I
35,0 - 39,9	Obesidade grau II
Acima de 40,0	Obesidade grau III
Observações:

O IMC é apenas uma medida geral e não leva em consideração a composição corporal (músculos versus gordura). Pessoas com muita massa muscular podem ter um IMC alto, mesmo que não sejam obesas. É importante consultar um médico ou nutricionista para uma avaliação individualizada.

Para mais informações:

Organização Mundial da Saúde (OMS): https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight




##desafio3.js

Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida  e a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

Entrada: valor atual da temperatura, escala atual da temperatura e a escala para exibição (conversão).

Saída (1)

###Fórmulas:

De  |Para    |Fórmula
--- | ---    | ---
Celsius | Fahrenheit | t°F = (t°C * 9/5) = 32
Celsius | Kelvin | tk = tc - 273.15
Fahrenheit | Celsius | tc = (tf - 32) * 5/9
Fahrenheit | Kelvin | tk = (tf + 459.67) * 5/9
Kelvin | Celsius | tc = (tk + 273.15)c
Kelvin | Fahrenheit | tf = (tk - 273.15) * 9/5 + 32

## Problema adicional

Como executar dois "programas" na mesma página? 


  
 

 ### operadores de comparação:

* == -> é igual
* === -> estritamente igual (valor e tipo)
* !=  -> não é igual
* !== -> não é estritamente igual
* >   -> maior que
* <   -> menor que
* >=  -> maior ou igual
* <=  -> menor ou igual