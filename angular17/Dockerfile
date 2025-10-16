# angular17/Dockerfile
FROM node:18-alpine
RUN apk add --no-cache bash
RUN npm install -g @angular/cli@17.3.9
RUN echo 'alias ng-serve="ng serve --host 0.0.0.0"' >> ~/.bashrc
WORKDIR /usr/src/app
CMD ["bash"]
