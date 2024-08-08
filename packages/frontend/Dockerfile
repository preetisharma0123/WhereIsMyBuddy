# Use an official Node.js image based on Alpine Linux
FROM node:latest AS builder

# Set the working directory inside the container
WORKDIR /frontend
WORKDIR /frontend

# Copy the package.json and package-lock.json (or yarn.lock or pnpm-lock.yaml) to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy env

COPY .env .env

# Build the application
RUN npm run build

# Stage 2: Serve the application using serve
FROM node:latest
FROM node:latest

# Install serve globally
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /frontend
WORKDIR /frontend

# Copy the build output from the builder stage to the working directory
COPY --from=builder /frontend/dist .

# Expose port 5000 to the outside world
EXPOSE ${PORT}

# Start the serve server
CMD ["serve", "-s", ".", "-l","${PORT}"]
