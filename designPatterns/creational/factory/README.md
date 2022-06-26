# Factory Method :factory:

### :dart: Propósito

O Factory Method é um **padrão criacional** de projeto que fornece uma interface para criar objetos em uma superclasse (classe base/mãe), mas permite que as subclasses(classe filho, que foi herdada de uma superclasse) alterem o tipo de objetos que serão criados.

### :frowning_face: Problema

Eu tenho uma aplicação de logística e todo o código dela fica na classe **Caminhão**, a aplicação fica famosa e dezenas de empresas de transporte marítimo desejam incorporar a logística marítima na aplicação.

Atualmente, a maior parte do seu código é acoplada à classe **Caminhão**, adicionar **Navio** à aplicação exigiria alterações em toda a base de código, se no futuro você desejar adicionar outros tipos de transporte, vai precisar fazer novamente todas as alterações.

### :grinning: Solução

O padrão **Factory Method** sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para um método fábrica especial, não se preocupe, os objetos ainda são criados através do operador **new**, mas esse está sendo chamado de dentro do método fábrica. Objetos retornados por um método fábrica geralmente são chamados de ***"products"*** ou produtos.

[Ver exemplo prático](./src/factory.ts)
