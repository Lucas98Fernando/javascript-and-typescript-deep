# Pure functions

## O que são funções?

As funções estão presentes em praticamente todas linguagens de programação, elas nos permitem **reutilizar trechos de código**, geralmente elas **recebem uma entrada** (input) e **produzem uma saída** (output).

## O que é uma função pura?

É uma função que **produz a mesma saída para a mesma entrada**, isso significa que ela retorna o **mesmo resultado** quando você passa os **mesmos argumentos**.

## Características de uma função pura

- **Previsível**: Ela produz uma saída previsível para as mesmas entradas.

- **Legível**: Qualquer pessoa pode ler a função como uma unidade independente e pode compreender o seu propósito.

- **Reutilizável**: A função pode ser reutilizada diversas partes do código fonte, sem alterar o seu comportamento de chamada, ou seja, possui um ótimo nível de abstração.

- **Testável**: Nós podemos testá-la com uma unidade independente.

## Exemplos

- Função pura:

<pre>
<code>
    function sayGreeting(name) {
        return `Hello ${name}`;
    }
</code>
</pre>

- Uma função com **side effects** (efeitos colaterais)

<pre>
<code>
    let greeting = "Hello";

    function sayGreeting(name) {
        return `${greeting} ${name}`;
    }
</code>
</pre>

- No código acima, o retorno da função **sayGreeting()** depende do estado da variável **greeting**.

## Casos clássicos de efeitos colaterais (side effects)

- Mutações (mudanças) da entrada em si.
- Consulta/Alteração da DOM.
- Realizando XMR (XML HTTP Request) / Chamadas de busca (fetch call)
