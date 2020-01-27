# gRPC-Greeter

## A gRPC playground environment with ASP.NET Core & Angular 8

### How to run
This workspace uses Docker-Compose to get things up and running. In order to build all required assets,  just run the following command:

    docker-compose build

To start the containers, run the following command:

    docker-compose up

The Angular frontend is available at `http://localhost:4200`.

You can stop the containers by just typing `ctrl-c` or by running the following command from another terminal window:

    docker-compose down

### How to translate proto files for gRPC-Web

Build a new image with the following command:

    cd protos && docker build -t protos .

Run the following command from the root directory to translate the proto files (you may need to adjust your local folder):

    docker run --rm -v ~/Git/grpc-greeter:/app protos
