# Estágio 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Serve
FROM nginx:alpine
# A ÚNICA MUDANÇA É AQUI!
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
