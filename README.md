# aprendendo

# anotações da aula

- `<meta name="viewport" content="width=device-width, inital-scale=1.0">`
    - o navegador ajusta o tamanho do conteúdo da página de acordo com o tamanho da tela do dispositivo

- % = usado baseado no tamanho do elemento pai
- rem = baseado no tamanho do root (html)
- em = baseado no tamanho do elemento pai
- vw/vh = baseado na largura/altura da tela (uma unidade é igual a 1% da altura/largura da tela)

- srcset = conseguimos definir diferentes tamanho para uma imagem (se o mecanismo não for suportado pelo navegador usamos `src`)
    - `srcset = "imagem-pequena.jpg 600w, imagem-media.jpg 1200w, imagem-grande.jpg 1800w"`
- sizes = define o quanto de espaço o tamanho da imagem definida anteriormente pode ocupar da tela do dispositivo
    - `sizes = "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"`


**flexbox** - usado para alinhamento vertical e horizontalmente
- `display: flex` -> no elemento pai dos elementos que vão se tornar boxes
- `flex-direction: row` -> indica que vai alinhar os elementos filhos na horizontal
- `flex-direction: column` -> indica que vai alinhar os elementos filhos na vertical
- `flex-direction: row-reverse` -> inverte a ordem dos itens na horizontal
- `flex-direction: column-reverse` -> inverte as ordens dos itens na vertical

**`justify-content`** - quando usamos `row` ou `row-reverse`
- `flex-start`: alinha à esquerda
- `flex-end`: alinha à direita
- `center`: centraliza os itens
- `space-between`: distribui os itens com espaço entre eles
- `space-around`: distribui os itens com espaço ao redor

**`align-itens`** - quando usamos `column` ou `column-reverse`
- `stretch`: preenche o container
- `flex-start`: alinha os itens no topo
- `flex-end`: alinha os itens na base
- `center`: centraliza os itens

**`gap`**
- permite criar um espaçamento entre os itens sem precisar da `margin`