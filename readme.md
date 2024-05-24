# Start project locally
- make sure you got Mysql DB with test credentials specified in `.env` file, you can use docker-compose file
- run `npm install`
- run `npm run prisma:generate`
- run `npm run prisma:migrate`
- run `npm run prisma:seed`
- run `npm run dev`

Refer to `prisma/generated/express/**` to find out which subroutes has been set up.
Refer to `https://www.prisma.io/docs/orm/reference/prisma-client-reference` to find out which parameters you can pass. For `GET` requests use encoded query parameters, for others - body payload.


## Postman

Import content of `/postman` into your postman to test API.