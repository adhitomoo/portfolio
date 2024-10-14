FROM node:18

WORKDIR /app
MAINTAINER Adhi Wiratomo <adhitomo22@gmail.com>

COPY package*.json ./
RUN node --max-old-space-size=4096 node_modules/.bin/npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

COPY --from=build /app/dist/fuse /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]
