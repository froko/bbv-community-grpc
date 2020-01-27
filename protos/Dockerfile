FROM debian:jessie-slim

RUN apt-get update && apt-get install -y curl unzip

WORKDIR /tmp

RUN curl -sSL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.2/protoc-3.11.2-linux-x86_64.zip -o protoc.zip && \
  unzip -qq protoc.zip && \
  cp ./bin/protoc /usr/local/bin/protoc

RUN curl -sSL https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64 -o /usr/local/bin/protoc-gen-grpc-web && \
  chmod +x /usr/local/bin/protoc-gen-grpc-web

WORKDIR /app

CMD protoc -I=./protos greet.proto \
  --js_out=import_style=commonjs:./greeter-client/src/app/greeter \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./greeter-client/src/app/greeter

