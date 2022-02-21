# Paradigma orientado a objetos

É um modelo de programação que busca **aproximar elementos do mundo real para o virtual**, através da utilização de classes, objetos, atributos e métodos.

A **Smalltalk** foi primeira linguagem de programação com paradigma de orientação a objetos, criada em 1970, por **Alan Kay**, foi a primeira linguagem a implementar os conceitos de **classes**, **objetos**, **atributos** e **métodos**.

**Em POO tudo são objetos!**, os objetos são instâncias de uma classe, são as classes que "fabricam" os novos objetos.

Os **4 pilares** da orientação a objetos, são: **herança**, **encapsulamento**, **polimorfismo** e **abstração**.

## Herança

Trata-se de **"receber" algo que já existe**, é um evento que ocorre entre classes. A **classe "doadora"**, é conhecida como **classe-pai**, a **classe que herda**, é conhecida como **classe-filho**.

A palavra chave para definir uma herança é a palavra **"extends"**, ou seja, a **classe-filho extende a classe-pai**.

Quando ocorre uma herança, a **classe-filho herda as características da classe-pai**, isso ajuda muito no **reuso de código**.

## Encapsulamento

É a característica de controlar a visibilidade de um **atributo** ou **método** de um objeto, ou seja, ele continuará funcionando, porém sem mostrar como é realizada sua implementação.

Isso garante uma camada extra de proteção para a aplicação, pois os detalhes de implementação não são revelados.

Os modificadores de acesso mais utilizados são: **protected**, **public** e **private**.

- A imagem abaixo mostra as características de cada modificador de acesso.

<img src="https://iq.opengenus.org/content/images/2020/04/java-opengenus.jpg" />

## Abstração

**Abstração** significa isolar mentalmente um elemento ou uma propriedade de um todo, para considerar individualmente. Do latim “abstracione”, que significa “separação”.

### Quais são as diferenças entre classes abstratas e interfaces ?

- **Classes abstratas**: São classes que não permitem a realização de qualquer tipo de instância, servem como classes "modelo" ou "templates" para suas classes derivadas, podem somente serem extendidas e herdadas, as classes derivadas das classes abstratas são conhecidas como classes concretas.

- **Interfaces**: Definem um “contrato” a ser seguido por outras classes. Este contrato é composto por cláusulas, que descrevem determinados comportamentos que este grupo de classes deverá seguir.
