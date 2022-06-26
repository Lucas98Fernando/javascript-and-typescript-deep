# Abstract Factory :factory:

### :dart: Propósito

O **Abstract Factory** é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.

### :frowning_face: Problema

Imagine que você está criando um simulador de loja de mobílias, o seu código consiste de classes que representam:

- Uma família de produtos relacionados, como: **Cadeira + Sofá + MesaDeCafé**.

- Diversas variantes dessa família, como por exemplo: Cadeira + Sofá + MesaDeCentro estão disponíveis nessas variantes: **Moderno, Vitoriano, ArtDeco**.

### :grinning: Solução

**1º)** Declarar explicitamente interfaces para cada produto distinto da família de produtos, com isso, você pode fazer todas as variantes dos produtos seguirem essas interfaces, ou seja, as variantes de cadeira podem implementar a interface **Cadeira**

**2º)** Declarar a fábrica com a lista de métodos de criação para cada produto que faz parte da família de produtos, esses métodos devem retornar os tipos abstratos de produtos.

**3º)** Para cada variante de uma família de produtos nós criamos uma classe fábrica separada baseada na interface abstrata.

[Ver exemplo prático](./src/furniture.ts)
