problem: `<video>` tags with `loop="true"` only loop in chrome when the server responds correctly to http range header requests

to see it working properly, visit http://maxogden.github.io/html5-video-loop-test/

to reproduce the non-working version, clone this repo and run `node dumb-server.js`, and then open [http://localhost:8080](http://localhost:8080)

the non-working version doesn't loop in chrome but it does loop in firefox
