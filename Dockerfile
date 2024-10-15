# Stage 1: Build the app with Node.js
FROM node:18 AS build

WORKDIR /app
LABEL maintainer="Adhi Wiratomo <adhitomo22@gmail.com>"

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm cache clean --force
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist/fuse /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
