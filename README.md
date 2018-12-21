# API-REST-JS
Core de API REST em Node.js para facilitar o desenvolvimento de API REST.
## COMO USAR
### DOCKER-COMPOSE
A aplicação esta dockerizada, recomendo ter o docker e docker-compose para iniciar:
```shell
docker-compose up
```
### MANUAL
Instalar as dependencias da aplicação
```shell
npm i --production
```
Após instalação, executar:
```shell
npm start
```
## NPM SCRIPTS
### Lint usando o style guide AirBNB
```shell
npm run code:lint
```
### Execução dos testes unitarios
```shell
npm run test:unit
```
### Execução da cobertura dos testes
```shell
npm run test:cover
```
### Execução dos testes integrados
```shell
npm run test:int
```
### Build da aplicação
Será executado: lint, cobertura dos testes unitarios e testes integrados.
```shell
npm run build
```
### Start
```shell
npm start
```
### PM2
Instalando o PM2:
```shell
npm i -g pm2
```
Iniciar a aplicação com o seguinte script:
```shell
npm run pm2:start
```
Se quiser parar a aplicação:
```shell
npm run pm2:stop
```
## APIS DE MODELO
Na pasta `/app` contem as pastas de apis:
- `api-funcionarios-get`
- `api-usuarios-get`

As demais pastas são de modulos de apoio a aplicação.
Estarei trabalhando em melhorias na construção da API.
Para identificação de uma nova api, basta no `index.js` da pasta, exportar o modulo `express.Router()` (olhar as apis de modelo).