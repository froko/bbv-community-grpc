### bbv Web Community

## gRPC & gRPC Web

---

### What is gRPC anyway?

- <b>R</b>emote <b>P</b>rocedure <b>C</b>all the *Google* way
- Uses HTTP/2 as transport layer
- Channel based communication
- Uses Protocoll Buffers (protobuf)
as service and message definition
- Very suitable for polyglot microsoervices
(Alternative to REST/JSON and queueing based systems)

---

### What is gRPC anyway?

- Suports the following message patterns:
    - Unary calls (Request/Response)
    - Server-side streaming
    - Client-side streaming

---

### What is gRPC Web?

- Aims to bring gRPC to (browser based) web applications
- Offery a way to translate proto files into
JavaScript/TypeScript files
- Due to the limitations of current browsers (HTTP/1.1),
a gRPC Gateway is required (Envoy)
- Only supports Unary calls & Server-side streaming

---

### Advantages

- Idiomatic client libraries in 10 languages
- Highly efficient on wire and with a simple service definition framework
- Bi-directional streaming with http/2 based transport
- Pluggable auth, tracing, load balancing and health checking
- Very clear interface declaration leads to fewer integation issues

---

### Disadvantages

- Less open than REST/JSON due to strict interface implementation
- Generated message classes not suitable for Frameworks/Libraries like Angular, React & Vue.js
- Need for a Gateway that translates between
HTTP1.1 and HTTP/2
- Extra step for proto file translation

---

### Resources

- [Official gRPC docs](https://grpc.io/docs/)
- [gRPC Web](https://github.com/grpc/grpc-web)
- [Is gRPC the Future of Client-Server Communication?](https://medium.com/@EdgePress/is-grpc-the-future-of-client-server-communication-b112acf9f365)
- [Introduction to gRPC on .NET Core](https://docs.microsoft.com/en-us/aspnet/core/grpc/?view=aspnetcore-3.1)