# Use a lightweight web server
FROM nginx:alpine

# Copy HTML files to the web server
COPY . /usr/share/nginx/html

# Expose port 80 (Default for Nginx)
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
