# react19/Dockerfile
FROM node:20-alpine
RUN apk add --no-cache bash
RUN npm install -g vite@7.1.2
RUN npm install -g @vitejs/plugin-react
RUN echo 'alias react-start="npm run dev -- --host 0.0.0.0"' >> ~/.bashrc
WORKDIR /usr/src/app
CMD ["bash"]
