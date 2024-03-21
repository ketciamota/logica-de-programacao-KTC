# Setup inicial de um repositório do github no VS STUDIO local.
1. Limpar credenciais do sistema 
2. Limpar os dados do navegador
3. Abrir o repositório no Github
4. Copiar a URL do repositório (https)
5. Abrir o VS Code
6. Se tiver algum projeto aberto no VS Code, então "feche" (CTRL+K F)
7. Se houver algum usuário logado então clique "sair" 
8. Verifique as variáveis 'user.name' e 'user.email' globais:
~~~bash
git config --global user.name
git config --global user.email
~~~
9. Se as variáveis retornarem algum valor, redefina ambas as variáveis:
~~~bash
git config --global --unset user.name
git config --global --unset user.email
~~~
10. Faça a clonagem do repositório no computador local:
~~~bash
git clone https://github.com/(ususario)/(repositorio).git
~~~
11. Abra o projeto clonado