# Stage 1: Build the Next.js static export
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

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

# Change ownership to nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx

# Switch to non-root user
USER nginx

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
