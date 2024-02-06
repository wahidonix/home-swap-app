# Use the official Node.js image as a base
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the Angular app for production
RUN ng build --prod

# Use nginx as a lightweight web server to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the previous stage into the nginx image
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
