### Setup Microservices
1. nest new ordering-app
2. nest generate app orders
3. nest generate app billing
4. nest generate app auth
5. nest g library common

5. npm run start:dev
6. npm run start:dev billing
7. npm run start:dev auth

docker-compose up --build -V