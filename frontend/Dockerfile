# Stage 1: Build the Next.js static export
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the static export
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the built static site from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
