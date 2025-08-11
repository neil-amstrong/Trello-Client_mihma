FROM node:18-alpine
WORKDIR /app
RUN npm install --production
EXPOSE 5000
COPY  ..
USER root
