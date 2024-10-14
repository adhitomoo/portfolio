FROM node:18 AS build

WORKDIR /app
MAINTAINER Adhi Wiratomo <adhitomo22@gmail.com>

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

COPY --from=build /app/dist/portfolio-v2 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
