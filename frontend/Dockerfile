# Use an official Nginx image as a base
FROM nginx:alpine

# Copy the built React app to Nginx's web root directory
COPY out /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
