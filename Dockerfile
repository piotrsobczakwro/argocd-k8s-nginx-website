FROM nginx:1.27-alpine

# Copy website files to nginx html directory
COPY website/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
