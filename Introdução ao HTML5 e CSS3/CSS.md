## CSS (linguagem de estilização)

### Blocos

a, p, h1, h3 {
	color: blue;
	font-size: 14px;
}

1. Nesse caso, o que antecede a abertura das chaves são os seletores (elementos padrão html) e o que está entre as chaves são as declarações e representa a regra de estilização deles
2. No CSS uma classe é precedida por um . (.header referencia a classe header) e um id é precedida por um # (#header referencia o id header) e no HTML se declaram classes ou ids como atributo de um elemento (`<h1 class="header"> Oi </h1>`)

### Box Model
![[Box Model.png]]

1. A **área de margem** (margin area) estende a área de borda com um espaço vazio utilizado para separar o elemento dos elementos vizinhos. Esta é a área de dentro do _margin edge,_ e suas dimensões são a largura e a altura do _margin-box_. 
2. A **área de preenchimento** (padding area) estende-se para a borda em torno do enchimento. Quando a área de conteúdo tem um fundo, cor ou imagem, isso será estendido para a área de preenchimento, por esse motivo, você pode pensar o preenchimento como a extensão do conteúdo. O preenchimento está localizado dentro do _padding edge,_ e suas dimensões são a _largura do padding-box_ e a _altura do padding-box._
3. A **área de conteúdo** (content area) é a área ocupada pelo conteúdo real do elemento. Ele frequentamente possui um fundo, uma cor de fonte ou uma imagem (nessa ordem, uma imagem opaca esconde a cor de fundo) e é localizada dentro do _content edge_; suas dimensões são a largura do conteúdo, ou largura do box de conteúdo, e altura do conteúdo, ou altura do box de conteúdo.
4. A **área de borda** (border area) estende a área de preenchimento para a área que contém as bordas. Esta é a área de dentro do _border edge_, e suas dimensões são a largura e a altura do _border-box_.

### Algumas propriedades
1. Background: fundo
2. Border: solid (sólida), dotted (bolinhas), dashed (tracejado), radius (raio) e cor (ex: border: 3px solid green) -> border-top, border-bottom, border-left e border-right
3. Fonts: family, size, style e weight
4. Text: transform (uppercase, lowercase, capitalize), decoration
5. List: style-type
6. (Max) Width, (Max) Height, Text Align, Margin 

*OBS*: ao colocar 4 valores em algumas propriedades a ordem que segue é horária (topo, direita, inferior e esquerda) -> border-radius: 1px 2px 3px 4px
