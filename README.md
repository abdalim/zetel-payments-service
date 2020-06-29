![CICD](https://github.com/abdalim/zetel-payments-service/workflows/CICD/badge.svg)

# zetel-payments-service

- Zetel app's payments service
- Endpoints:
  - POST /payments/verify = verify an order

## Details

- Tech
  - Typescript
  - NestJS
  - Jest
  - Docker
  - eslint
  - Prettier
- Unit tests
- Continuous deployment with Github Action and Github Package Registry

## Development Guide

### Setup

- Duplicate `*.env.template` files,  eg `.env.template`, and fill in config details as env vars and remove the `.template` suffix

- start service with hot-reload

```
> npm run start:dev
```

- start coding

### Unit testing

```
> npm run test
```

### Run as containers locally

- create user defined bridge network to connect self-containers

```
> npm run network:create
```


- build service

```
> npm run docker:build
```

- start service

```
> npm run docker:start
```

### Stop containers locally

- stop service

```
> npm run docker:stop
```

- cleanup network

```
> npm run network:remove
```

## Future Improvements

- End-to-end integration testing
- Related infrastructure resources as codes under `/ops` directory

