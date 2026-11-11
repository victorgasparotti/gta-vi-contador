# Contador GTA VI

Contagem regressiva responsiva para GTA VI, feita com Flask, HTML, CSS e JavaScript. O projeto usa o wallpaper de Vice City, o logo do jogo e animações suaves.

## Site publicado

https://gta-vi-contador.vercel.app

## Executar no computador

1. Instale o Python, se ainda não estiver instalado.
2. Abra o terminal na pasta do projeto.
3. Instale a dependência:

   ```bash
   pip install -r requirements.txt
   ```

4. Inicie o servidor:

   ```bash
   python app.py
   ```

5. Abra http://127.0.0.1:5000 no navegador.

## Adicionar à Tela de Início do iPhone

1. Abra o site publicado no Safari do iPhone.
2. Toque em **Compartilhar**.
3. Escolha **Adicionar à Tela de Início** e confirme.

O projeto inclui um ícone de 180 × 180 px em `static/images/apple-touch-icon.png` e as configurações do web app em `static/manifest.webmanifest`.

### Se aparecer o ícone antigo

O iPhone pode manter em cache o ícone do atalho anterior. Apague o atalho da Tela de Início, abra novamente o endereço acima no Safari e adicione-o de novo. Se continuar igual, confirme que a versão mais recente foi publicada no Vercel e tente novamente.

## Arquivos principais

- `app.py`: aplicação Flask. Não foi alterado para a interface.
- `contador.py`: data usada pelo contador Python.
- `templates/index.html`: estrutura da página.
- `static/css/style.css`: aparência, layout para celular e animações.
- `static/js/script.js`: atualização do contador no navegador.
- `static/images/vice-city.jpg`: wallpaper de fundo.
- `static/images/logo-gta-vi.png`: logo usado na página.
- `static/images/apple-touch-icon.png`: ícone para a Tela de Início do iPhone.
- `static/images/app-icon-512.png`: ícone maior para o web app.
- `static/manifest.webmanifest`: nome e configurações do web app.

O contador visual usa a data que já está configurada no código Python: 19 de novembro de 2026.
