# Securities-Case

## securities-case-mobile

`securities-case-mobile` implements a basic react native client that fetches `/instruments` and price updates through a websocket connection.

### Installation
* `cd securities-case-mobile && npm install`
* `react-native run-ios`

Make sure `securities-case-web` project is running. You need to edit `BASE_URL` in `src/helpers/TransportLayer.js` if you want to deploy the application to a device.

### Tests
* Type `npm test` to run all the tests.
* You may also run `./node_modules/jest/bin/jest.js --coverage` to see the test coverage.

### Problems
* SockJS didn't run on Android out of the box. I tried few tricks to fix but couldn't come up with a soluton.
* There are two errors when you run a test. Both are related to react-native version 0.45.1, and they'll probably be gone in the next release: https://github.com/facebook/react-native/pull/14370
