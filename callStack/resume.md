# **Como funciona a Call Stack (Pilha de chamadas) no Javascript ?** :gear:

## :hammer: Como um código em Javascript é executado ?

- Nos dias de hoje, os motores de Javascript mais proeminentes são: Google V8 e SpiderMonkey, o V8 é um motor Javascript de código aberto, utilizado no Google Chrome e Node.js, já o SpiderMonkey é utilizado no Mozilla Firefox.

- O motor de execução do Javascript é um single-thread (Processa uma tarefa por vez), as chamadas de funções ocorrem de forma síncrona, ou seja, uma após a conclusão da anterior.

- A pilha de chamadas do Javascript se baseia na estrutura de dados LIFO (Last in, first out), ou seja, o último a entrar, é o primeiro a sair, com esse princípio, é possível armazenar e gerenciar a chamada das funções em um determinado programa.

- Quando um método é chamado, ele será adicionado à pilha através de um "push" e o último método no topo da pilha será removido através de um "pop" após ser executado.

- Os objetos da pilha de chamadas são alocados em um Heap, uma parte não estruturada da memória, toda a alocação de memória, variáveis e objetos acontecem aqui.

## **O que é um Stack Overflow ?** :fire:

- Ocorre quando uma determinada função é executada inúmeras vezes de forma recursiva (Quando a função chama a si mesma), estourando o tamanho máximo de memória alocada para a execução do programa. Para se ter uma ideia, o valor máximo no Google Chrome, é de 16.000 frames.

## **O que são contextos de execução ?** :computer:

- **Existem 3 tipos:** 
    - **Contexto de execução global:** É o contexto de execução base ou padrão. O código não está dentro que nenhuma função no contexto de execução global, diante disso, é criado um objeto global, conhecido como "window object" (no caso dos navegadores), o valor de <code>this</code> é configurado para ser igual ao valor do objeto global, só pode haver um único contexto de execução global em um programa.

    - **Contexto de execução funcional:** Cada vez que uma função é invocada/chamada, um novo contexto de execução é criado para aquela função, cada função possui o seu próprio contexto de execução, mas só é criada quando a função é chamada, pode haver uma série de etapas em uma ordem de execução.

    - **Contexto de função eval:** Um código executado dentro de uma função <code>eval</code> também possui o seu próprio contexto de execução, contudo, o <code>eval</code> não é utilizado com frequência por desenvolvedores Javascript.

## **Como o contexto de execução é criado ?**

- 2 fases: **Criação** e **execução**

### Fase de criação:

1. LexicalEnvironment componente é criado.
2. VariableEnvironment componente é criado.

O **LexicalEnvironment** é uma estrutura que mantém o mapeamento do **identificador** - **variável**, nesse cenário, o **identificador** refere-se ao nome das variáveis/funções e **variável** é a referência ao objeto atual (incluindo objeto de funções e arrays de objetos) ou tipos primitivos.

- Exemplo:

<pre>
<code>
    var a = 20;
    var b = 40;
        
    function foo() {
        console.log('bar');
    }
</code>
</pre>

- LexicalEnvironment para o exemplo acima:

<pre>
<code>
    lexicalEnvironment = {
        a: 20,
        b: 40,
        foo: < ref. to foo function >
    }
</code>
</pre>

O **LexicalEnvironment** possui **3 componentes**:

1. Environment Record (Registro do ambiente)
2. Reference to the outher environment (Referência para outro ambiente)
3. This binding (Ligação entre dados)
