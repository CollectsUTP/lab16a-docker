# To fix unauthorized error, first login to Docker Hub before building the image
# Use `docker login` from your CLI with username and password or access token
FROM node:22
WORKDIR /app
COPY package.json .
COPY app.js .
RUN npm install
CMD ["npm", "app.js"]
