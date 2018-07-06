#!/usr/bin/env node

const https = require('https');
const http = require('http');

class Server {
  constructor(props) {
    this.port = props.port;
  }

  init() {
    return new Promise((res, rej) => {
      this.pure = http.createServer();
      this.pure.listen(this.port, (err) => {
        if (err) return rej(err);
        res()
      });
    });
  }
}
