
# Cadastro de endereço

<h2>Inspiração</h2>

`Amazon`

Inspirado pela Amazon, o meu formulário de login foi criado para tornar a sua experiência de compras online mais conveniente. Pedimos que você forneça o seu endereço, isso nos ajuda a mostrar produtos disponíveis na sua região e personalizar sua navegação.
Também adicionamos um campo para o seu nome, para tornar a interação mais amigável e permitir que os vendedores saibam para quem estão enviando os produtos.
E, além disso, incluímos um campo para o seu número de telefone, para que possamos entrar em contato de forma eficiente caso você tenha alguma dúvida ou problema com os seus pedidos.

`Shopee:`

Inspirado pelo Shopee, o meu formulário de login foi projetado para tornar a experiência de compras online mais fácil e segura. Ele solicita as seguintes informações:
Nome e sobrenome do usuário, proporcionando uma experiência mais personalizada.
Endereço de e-mail no formato @gmail como identificador exclusivo, garantindo uma conta única e segura.
Número de telefone para fins de segurança e comunicação rápida.
Uma senha robusta para garantir a segurança da conta, seguindo os melhores padrões de segurança online.

`Shein:`

Ao projetar o formulário de login, me inspirei na abordagem da Shein. Eles começam solicitando o número de celular, o que é uma excelente forma de manter contato e enviar atualizações sobre os pedidos.
Em seguida, adicionei a etapa de criar uma senha como uma camada adicional de segurança para a conta. Isso ajuda a proteger os dados do usuário.
Por fim, incluí a opção de inserir o endereço, que desempenha um papel crucial na garantia da entrega dos produtos no local correto.

</h3>

# Índice
[Introdução](#introdução😎)

[Funcionalidades](#funcionalidades)

[Descrição](#descri%C3%A7%C3%A3o) 

[Tecnologias Utilizadas](#tecnologias-utilizadas)  
  
[Autor](#autor)

[Colaboradores](#Colaboradores)

## Introdução😎
<h3>Este é um exemplo simples de um formulário HTML para cadastro de endereços. O formulário foi criado para coletar informações básicas de endereço, como CEP, rua, número, bairro, cidade e estado.</h3>

![Imagem](imagem890.png)

## Funcionalidades

`FUNCIONALIDADE 1:`
<h3>Campo Cep sendo completo corretamente</h3>

![Gif](cep-correto.gif)

`FUNCIONALIDADE 2:`
<h3>Campo Cep incompleto</h3>

![Gif](cep-incompleto0.gif)

`FUNCIONALIDADE 3:`
<h3>Todos campos incompletos</h3>

![Gif](cep-sem-nada.gif)

## Descrição
`async:` A palavra-chave async é usada na definição da função pesquisarCep. Ela indica que essa função é assíncrona, o que permite que ela execute operações assíncronas, como a busca na API, sem bloquear a execução do restante do código.

`await:` A palavra-chave await é usada dentro da função pesquisarCep para indicar que o código deve aguardar a conclusão da chamada fetch (que é uma operação assíncrona de busca na API) e a conversão dos dados para JSON antes de prosseguir com a execução. Isso evita que o código continue executando antes que os dados estejam prontos para uso.

`hasOwnProperty:` É um método disponível em objetos JavaScript. Ele é usado para verificar se um objeto possui uma determinada propriedade. No código, é usado para verificar se a resposta da API contém a propriedade 'erro'. Se essa propriedade existir na resposta, isso significa que o CEP não foi encontrado, e um alerta é exibido.

`fetch:` A função fetch é usada para fazer uma solicitação HTTP para uma URL especificada.
No código, a URL é construída com base no valor do CEP fornecido pelo usuário.
A chamada fetch(url) retorna uma promessa que representa a resposta da solicitação HTTP.


`json:`Método json() é usado em uma resposta de uma solicitação HTTP para processar o corpo da resposta como JSON.No código, a linha const addres = await dados.json(); faz a conversão do conteúdo da resposta da API (que é em JSON) em um objeto JavaScript.
O resultado da chamada json() também é uma promessa que resolve para o objeto JavaScript que representa os dados JSON.

### Tecnologias utilizadas👌

* HTML5
* Javascript3
* Via Cep
* Github
* Visual Studio Code


## Autor

* [Miguel](https://github.com/miguelitto16)

## Colaboradores
* [Gabriel](https://github.com/Braboalenda04)
* [Nicolas](https://github.com/NicolasMussi89)



<h2>Recursos adicionados</h2>

 <h3>Todos inspirados nos três sites</h3>

* `nome`

* `sobrenome`

* `telefone`
