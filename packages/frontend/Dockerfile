# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock or pnpm-lock.yaml) to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using serve
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /app

# Copy the build output from the builder stage to the working directory
COPY --from=builder /app/dist .

# Expose port 5000 to the outside world
EXPOSE 5000

# Start the serve server
CMD ["serve", "-s", ".", "-l", "5000"]
