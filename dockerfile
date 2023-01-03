# Dockerfile é a imagem do meu container!
# Imagem = container parado, as definições dele
# Nesse aqruivo vamos deifinir as dependecias, SO, arquivos que precisam ir para o container
# comandos que precisam ser executos etc

# 1 - Importando a imagem
FROM node

# 2 - Diretorio onde eu quero que as informações estejam contidas
WORKDIR /usr/app

# 3 - Copiando o package.json para o WORKDIR (pra dentro do meu container)
COPY package.json ./

# 4 - Roda o projeto
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3333

