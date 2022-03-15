FROM node:16.13
WORKDIR /usr/webapp

COPY . .
RUN apt-get -q update && apt-get -qy install netcat
RUN chmod +x ./utils/wait-for.sh
RUN npm install \
  && npm run build
EXPOSE 3000