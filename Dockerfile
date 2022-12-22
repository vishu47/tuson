FROM node:16

WORKDIR /src
COPY . .

EXPOSE 4006

RUN npm install
RUN npm install serve
RUN npm install build

CMD ["npm","run","deploy"]