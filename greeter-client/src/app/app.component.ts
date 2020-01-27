import { Component } from '@angular/core';

import * as grpcWeb from 'grpc-web';

import { GreeterClient } from './greeter/greet_grpc_web_pb';
import { HelloReply, HelloRequest } from './greeter/greet_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greeter-client';

  constructor() {
    const service = new GreeterClient('http://localhost:8080');
    const request = new HelloRequest();
    request.setName('bbv Web Community');

    const call = service.sayHello(
      request, {},
      (err: grpcWeb.Error, response: HelloReply) => {
        if (err) {
        console.error(err.code, err.message);
        } else {
          this.title = response.getMessage();
        }
      });
  }
}
