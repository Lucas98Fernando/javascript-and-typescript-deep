# Promises

- Como o próprio nome sugere, as **Promises** (promessas) definem uma ação que vai ser **executada no futuro**, ou seja, ela pode ser **resolvida (com sucesso)** ou **rejeitada (com erro)**, em outras palavras, uma Promise **é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona**.
- As Promises não eram nativas do JavaScript até o ES6, quando houve uma implementação oficial na linguagem, antes delas, a maioria das funções usavam **callbacks**.

## Encadeamento

- Com o encadeamento de operações, utilizando o <code>.then()</code>, podemos executar duas ou mais operações assíncronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem sucedida.

## Estados de uma Promise

Uma Promise pode assumir **quatro estados principais**:

- **Pending**: O estado inicial da Promise, ela foi iniciada mas ainda não foi realizada nem rejeitada
- **Fulfilled**: Sucesso da operação, é o que chamamos de uma Promise realizada (ou, em inglês, resolved) — eu, pessoalmente, prefiro o termo resolvida.
- **Rejected**: Falha da operação, é o que chamamos de uma Promise rejeitada (em inglês, rejected)
- **Settled**: É o estado final da Promise, quando ela já sabe se foi resolved ou rejected
