# bootcamp-rocketseat-desafio-3

docker run --name mongo -p 27017:27017 -d -t mongo

docker run --name redis -p 6379:6379 -d -t redis:alpine

docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
