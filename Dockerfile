FROM mhart/alpine-node:8.1.3

# required for native deps :'(
RUN apk add --no-cache make gcc g++ python sqlite

ENV LOG_LEVEL=info
RUN mkdir /src
COPY . /src

WORKDIR /src

RUN npm rebuild --production

EXPOSE 3000
CMD ["node", "index.js"]
