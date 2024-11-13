# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package*.json and package-lock.json
COPY package*.json ./

# Clean Cache
RUN npm cache clean --force

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build

# Use a Nginx image as the base for the production image
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular app into the Nginx default directory
COPY --from=0 /app/dist/portfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
