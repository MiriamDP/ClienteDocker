# angular16/Dockerfile
FROM node:18-alpine
RUN apk add --no-cache bash
RUN npm install -g @angular/cli@16
RUN echo 'alias ng-serve="ng serve --host 0.0.0.0"' >> ~/.bashrc
WORKDIR /usr/src/app
CMD ["bash"]