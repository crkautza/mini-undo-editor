# Mini Undo Editor

Um editor de texto minimalista com funcionalidade de **desfazer (undo)** e **refazer (redo)**, implementado com pilhas em JavaScript puro. O projeto foi desenvolvido como parte dos estudos para consolidar conceitos de manipulação de DOM, estruturas de dados e persistência com localStorage.

## Funcionalidades

- Adicionar palavra pré-definida ("Palavra") ao texto atual
- Inserir palavra personalizada via campo de input
- Desfazer (undo) ações anteriores
- Refazer (redo) ações desfeitas
- Atalhos de teclado: **Ctrl+Z** (desfazer) e **Ctrl+Y** (refazer)
- Botões desabilitados dinamicamente quando não há ações disponíveis
- Persistência com **localStorage** – o texto e o histórico são salvos mesmo após recarregar a página
- Layout responsivo com suporte a dispositivos móveis

## Estrutura do projeto

```
mini-undo-editor/
├── index.html         # Estrutura da página
├── script.js          # Lógica completa do editor
├── style.css          # Estilização
└── README.md          # Documentação
└── LICENSE            # Licença
```

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/crkautza/mini-undo-editor.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Clique em **"Adicionar Palavra"** para inserir a palavra padrão.
4. Digite algo no campo **"Personalize a palavra adicionada"** e clique em **"Inserir"** para usar sua própria palavra.
5. Use os botões **"Desfazer"** e **"Refazer"** ou os atalhos **Ctrl+Z** e **Ctrl+Y** para navegar no histórico.
6. Recarregue a página – tudo continua lá! 🎉

## Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox, responsividade)
- JavaScript (puro, sem frameworks)

## Versões
O projeto possui as seguintes branches:

- main – versão estável atual

- v1.0 – versão inicial com undo/redo básico

- v1.1 – adicionado atalhos de teclado

- v1.2 – implementado localStorage e responsividade

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Caio Richard - [GitHub](https://github.com/crkautza)   - [Linkedin](https://www.linkedin.com/in/crkautza/)