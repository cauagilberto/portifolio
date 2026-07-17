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


