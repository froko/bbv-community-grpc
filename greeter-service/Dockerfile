FROM mcr.microsoft.com/dotnet/core/sdk:3.0.101 AS build-env
WORKDIR /app

COPY ./protos ./protos
COPY ./greeter-service/greeter-service ./greeter-service/greeter-service

WORKDIR /app/greeter-service/greeter-service

RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0.1
WORKDIR /app
COPY --from=build-env /app/greeter-service/greeter-service/out .

ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

ENTRYPOINT ["dotnet", "greeter-service.dll"]