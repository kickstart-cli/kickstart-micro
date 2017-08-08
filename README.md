# kickstart-micro

This is a boilerplate for scalable REST API microservices

## Quick Start

To run locally:

```
git clone https://github.com/kickstart-cli/kickstart-micro
cd kickstart-micro
yarn
yarn start
```

## architecture

This was built using the following architecture decisions:
- server in zeit/micro, a low-friction express-based server lib
- environment-based structured logs using winston
- request logging, with status codes
- long-query warnings
- unique id's for all requests (ksuid, `X-Request-ID` response header)
- a healthcheck endpoint for starting up
- eslint, with a superset of feross/standard (`npm run lint`)
- unit testing using ava and mock-require (`npm test`)
- test coverage reporting using nyc (`npm run test:coverage`)
- precommit hooks for running tests automatically
- a development environment server (`npm run dev`)
- a generic dockerfile for deployment
- sane environment defaults (`/settings.js`)
