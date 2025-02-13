# Usando uma imagem base com node
FROM node:22

# Instalando dependências necessárias
RUN apt-get update && apt-get install -y unixodbc-dev build-essential python3

# Configurando o diretório de trabalho
WORKDIR /app

# Copiando os arquivos do seu projeto
COPY . .

# Instalando as dependências
RUN npm install

# Expondo a porta 3000 (ou a que você usa)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
