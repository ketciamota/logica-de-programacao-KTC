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
