FROM node:16.13
WORKDIR /usr/webapp

COPY . .
RUN npm install \
  && npm run build
EXPOSE 3000
CMD npm run start
