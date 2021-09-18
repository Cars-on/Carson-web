![car-on-wallpaper 1](https://user-images.githubusercontent.com/55189046/133905993-09453f58-249f-429e-a097-4dc3f84a9108.png)

### Rodando o projeto

Primeiramente será necessário clonar o repositório do back-end que está disponível no link abaixo. Neste repositório estão contidas todas as orientações para a execução da API que será consumida.

[Back-end](https://github.com/Cars-on/Carson-api)

#### AVISO: É necessário ter o servidor do backend rodando para o funcionamento de algumas features

## Como rodar o projeto

Para rodar é essencial que tenha o [node](https://nodejs.org/en/) instalado, caso não tenha siga o passo a passo logo abaixo

#### Ubuntu 
```
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Debian, as root
```
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

#### [Outra distribuição Linux](https://nodejs.org/en/download/package-manager/)

#### Windows
Acesse o site do [NodeJs](https://nodejs.org/en/) e instale a versão LTS

Com tudo já instalado primeiro faça o clone deste repositório
```
https://github.com/Cars-on/Carson-web.git
```

Acesse a pasta do repositório pelo terminal
```
  cd Carson-web
```

Agora instale as dependencias do projeto
```yarn``` ou ```npm install```

Apos ter instalado as dependencias do projeto é necessário rodar o servidor local do projeto
```
yarn start
```
ou
```
npm start
```

A aplicação rodará na porta 3000 do seu localhost -> [http://localhost:3000](http://localhost:3000/)

## Tecnologias e bibliotecas
* [`typescript`](https://www.typescriptlang.org/)
* [`eslint`](https://eslint.org/)
* [`contextApi`](https://pt-br.reactjs.org/docs/context.html)
* [`react-icons`](https://react-icons.github.io/react-icons/)
* [`axios`](https://github.com/axios/axios)
* [`styled-components`](https://styled-components.com/)



