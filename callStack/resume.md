# Como funciona a Call Stack (Pilha de chamadas) no Javascript ?

## Como um código Javascript é executado ?

- Nos dias de hoje, os motores de Javascript mais proeminentes são: Google V8 e SpiderMonkey, o V8 é um motor Javascript de código aberto, utilizado no Google Chrome e Node.js, já o SpiderMonkey é utilizado no Mozilla Firefox.

- O motor de execução do Javascript é um single-thread (Processa uma tarefa por vez), as chamadas de funções ocorrem de forma síncrona, ou seja, uma após a conclusão da anterior.

- A pilha de chamadas do Javascript se baseia na estrutura de dados LIFO (Last in, first out), ou seja, o último a entrar, é o primeiro a sair, com esse princípio, é possível armazenar e gerenciar a chamada das funções em um terminado programa.

- Quando um método é chamado, ele será adicionado à pilha através de um "push" e o último método no topo da pilha será removido através de um "pop" após ser executado.

- Os objetos da pilha de chamadas são alocados em um Heap, uma parte não estruturada da memória, toda a alocação de memória, variáveis e objetos acontecem aqui.

# O que é um Stack Overflow ?

- Ocorre quando uma determinada função é excutada inúmeras vezes de forma recursiva (Quando a função chama a si mesma), estourando o tamanho máximo de memória alocada para a execução do programa. Para se ter uma ideia, o valor máximo no Google Chrome, é de 16.000 frames.


