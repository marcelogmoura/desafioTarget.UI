# Estágio 1: Build do Angular
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Estágio 2: Servidor Nginx para rodar o app
FROM nginx:alpine
# Copia os arquivos gerados (dist) para a pasta do Nginx
COPY --from=build /app/dist/desafio-target-ui/browser /usr/share/nginx/html
# Expõe a porta 80
EXPOSE 80
# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]